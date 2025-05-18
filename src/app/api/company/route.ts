import { NextRequest, NextResponse } from "next/server";
import { LanguageKey, languageKeys } from "@/app/util/language";

const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;
const SPACE_ROOT = "company";

interface Story {
  content: {
    id: string;
    bio: string;
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
      `https://api.storyblok.com/v2/cdn/stories?token=${STORYBLOK_TOKEN}&starts_with=${folderSlug}&cv=${Date.now()}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
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
        id: c.id,
        bio: c.bio,
      };
    });

    return NextResponse.json(parsed[0]);
  } catch (error) {
    console.error("Error loading data:", error);
    return NextResponse.json(
      { error: "Unexpected failure loading data" },
      { status: 500 },
    );
  }
}
