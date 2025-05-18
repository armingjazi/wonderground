import { NextRequest, NextResponse } from "next/server";
import { LanguageKey, languageKeys } from "@/app/util/language";

const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;
const SPACE_ROOT = "people";

interface Story {
  content: {
    name: string;
    bio: string;
    type: string;
    image: { filename: string };
    title?: string;
  };
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const language = (searchParams.get("language") ||
    "ENGLISH") as LanguageKey;

  const lang = (
    languageKeys.includes(language) ? language : "ENGLISH"
  ).toLowerCase();

  const folderSlug = `${SPACE_ROOT}/${lang}/`;

  try {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?token=${STORYBLOK_TOKEN}&starts_with=${folderSlug}&sort_by=content.order`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      },
    );

    if (!res.ok) {
      console.error("Storyblok API error:", await res.text());
      return NextResponse.json(
        { error: "Failed to fetch from Storyblok" },
        { status: res.status },
      );
    }

    const { stories } = await res.json();

    const parsed = stories.map((story: Story) => {
      const c = story.content;
      return {
        id: c.name,
        name: c.name,
        bio: c.bio,
        type: c.type,
        image: c.image.filename,
        title: c.title,
      };
    });

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Error loading data:", error);
    return NextResponse.json(
      { error: "Unexpected failure loading data" },
      { status: 500 },
    );
  }
}
