import { NextRequest, NextResponse } from "next/server";
import { LanguageKey, languageKeys } from "@/app/util/language";
import { FOLDER_MAP } from "@/app/util/folderMap";
import path from "path";
import fs from "fs";

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

    if (!res.ok) throw new Error(await res.text());

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
    console.error("❌ Storyblok fetch failed:", error);

    try {
      const langCode = FOLDER_MAP[language];

      const fallbackPath = path.resolve(
        process.cwd(),
        `public/fallback/people.${langCode}.json`,
      );
      const file = fs.readFileSync(fallbackPath, "utf-8");
      const fallback = JSON.parse(file);
      console.warn("⚠️ Serving fallback data:", fallbackPath);
      return NextResponse.json(fallback);
    } catch (readError) {
      console.error("❌ Fallback file failed to load:", readError);
      return NextResponse.json(
        { error: "Failed to load data from both Storyblok and fallback." },
        { status: 500 },
      );
    }
  }
}
