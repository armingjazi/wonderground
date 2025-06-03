import { NextRequest, NextResponse } from "next/server";
import { LanguageKey, languageKeys } from "@/app/util/language";
import { FOLDER_MAP } from "@/app/util/folderMap";
import path from "path";
import fs from "fs";

const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;
const SPACE_ROOT = "pieces";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const language = (searchParams.get("language") || "ENGLISH") as LanguageKey;
  const lang = (
    languageKeys.includes(language) ? language : "ENGLISH"
  ).toLowerCase();

  const folderSlug = `${SPACE_ROOT}/${lang}/`;

  try {
    const res = await fetch(
      `https://api.storyblok.com/v2/cdn/stories?token=${STORYBLOK_TOKEN}&starts_with=${folderSlug}&resolve_relations=piece.visuals`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) throw new Error(await res.text());

    const { stories, rels } = await res.json();

    const parsed: {
      id: string;
      title?: string;
      type: string;
      shortDesc?: string;
      fullDesc?: string;
      tagline?: string;
      concept?: string;
      aesthetics?: string;
      trailer?: string;
      castAndCrew?: string;
      events?: [];
      visuals: {
        main: {
          filename: string;
          alt: string;
        };
        mask?: {
          filename: string;
          alt: string;
        };
        promos?: {
          filename: string;
          alt: string;
        }[];
        trailer?: string;
        color?: string;
        width?: number;
        height?: number;
        fontSize?: number;
        xTranslate?: number;
        yTranslate?: number;
        position?: number;
        order?: number;
        maskOpacity?: number;
      };
    }[] = stories.map(
      (story: {
        content: {
          CastAndCrew: string;
          id: string;
          Title?: string;
          Name?: string;
          ShortDescription?: string;
          FullDescription?: string;
          Tagline?: string;
          Concept?: string;
          Aesthetics?: string;
          Trailer?: string;
          visuals?: string[];
        };
        name: string;
        id: string;
      }) => {
        const c = story.content;
        const match = rels.find(
          (r: { uuid: string }) => r.uuid === story.content.visuals?.[0],
        );
        return {
          id: c.id,
          type: "piece",
          title: c.Title || c.Name || story.name,
          shortDesc: c.ShortDescription || "",
          fullDesc: c.FullDescription || "",
          tagline: c.Tagline || "",
          concept: c.Concept || "",
          aesthetics: c.Aesthetics || "",
          castAndCrew: c.CastAndCrew || "",
          visuals: {
            main: {
              filename: match?.content.main.filename || "",
              alt: match?.content.main.alt || "",
            },
            mask: {
              filename: match?.content.mask.filename || "",
              alt: match?.content.mask.alt || "",
            },
            promos:
              match?.content.promos.map(
                (promo: { filename: string; alt: string }) => ({
                  filename: promo.filename,
                  alt: promo.alt || "",
                }),
              ) || [],
            trailer: match?.content.trailer.url || "",
            color: match?.content.color,
            width: parseInt(match?.content.width),
            height: parseInt(match?.content.height),
            fontSize: parseInt(match?.content.fontSize),
            xTranslate: parseInt(match?.content.xTranslate),
            yTranslate: parseInt(match?.content.yTranslate),
            position: parseInt(match?.content.position),
            order: parseInt(match?.content.order),
            maskOpacity: parseFloat(match?.content.maskOpacity),
          },
        };
      },
    );

    const resEventCal = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${SPACE_ROOT}/event-calendar?token=${STORYBLOK_TOKEN}&resolve_relations=event-calendar.visuals`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 300 },
      },
    );

    if (!resEventCal.ok) throw new Error(await resEventCal.text());

    const { story: calendarStory, rels: calendarRels } = await resEventCal.json();

    const match = calendarRels.find(
      (r: { uuid: string }) => r.uuid === calendarStory.content.visuals?.[0],
    );
    parsed.push({
      id: "event-calendar",
      title: "UPCOMING EVENTS",
      type: "calendar",
      events: calendarStory.content.events.map(
        (event: {
          id: string;
          name: string;
          date: string;
          location: string;
          venue: string;
          link: string;
          country: string;
        }) => {
          const date = new Date(event.date);

          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return {
            id: event.id,
            name: event.name,
            date: `${year}/${month < 10 ? "0" : ""}${month}/${day < 10 ? "0" : ""}${day}`,
            location: event.location,
            country: event.country,
            venue: event.venue,
            link: event.link,
          };
        },
      ),
      visuals: {
        main: {
          filename: calendarStory.content.image.filename,
          alt: calendarStory.content.image.filename,
        },
        color: match?.content.color,
        width: parseInt(match?.content.width),
        height: parseInt(match?.content.height),
        fontSize: parseInt(match?.content.fontSize),
        xTranslate: parseInt(match?.content.xTranslate),
        yTranslate: parseInt(match?.content.yTranslate),
        position: parseInt(match?.content.position),
        order: parseInt(match?.content.order),
        maskOpacity: parseFloat(match?.content.maskOpacity),
      },
    });

    return NextResponse.json(parsed);
  } catch (error) {
    console.error("❌ Storyblok fetch failed:", error);

    try {
      const langCode = FOLDER_MAP[language];

      const fallbackPath = path.resolve(
        process.cwd(),
        `public/fallback/pieces.${langCode}.json`,
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
