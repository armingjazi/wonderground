import fs from "fs";
import path from "path";
import dotenv from "dotenv";

dotenv.config();

const STORYBLOK_TOKEN = process.env.STORYBLOK_TOKEN;
const LANGUAGES = ["english", "spanish", "catalan"];
const FOLDER_MAP = {
  english: "en",
  spanish: "es",
  catalan: "ca",
};

function writePerLang(type, lang, data) {
  const short = FOLDER_MAP[lang];
  const filePath = path.resolve(`public/fallback/${type}.${short}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log(`✅ Saved ${filePath}`);
}

function parseNumber(v) {
  const n = parseFloat(v);
  return isNaN(n) ? undefined : n;
}

async function fetchJSON(url) {
  const res = await fetch(url, { headers: { "Content-Type": "application/json" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function fetchStories({ root, lang, resolveRelations = "", sort = "" }) {
  const url = new URL("https://api.storyblok.com/v2/cdn/stories");
  url.searchParams.set("token", STORYBLOK_TOKEN);
  url.searchParams.set("starts_with", `${root}/${lang}/`);
  if (resolveRelations) url.searchParams.set("resolve_relations", resolveRelations);
  if (sort) url.searchParams.set("sort_by", sort);
  return fetchJSON(url.toString());
}

async function fetchEventCalendar() {
  const url = `https://api.storyblok.com/v2/cdn/stories/pieces/event-calendar?token=${STORYBLOK_TOKEN}&resolve_relations=event-calendar.visuals`;
  return fetchJSON(url);
}

async function run() {
  for (const lang of LANGUAGES) {
    const pieces = [];

    // --- PIECES ---
    const { stories, rels } = await fetchStories({
      root: "pieces",
      lang,
      resolveRelations: "piece.visuals",
    });

    for (const story of stories) {
      const c = story.content;
      const match = rels.find((r) => r.uuid === c.visuals?.[0]);

      pieces.push({
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
            filename: match?.content.main?.filename || "",
            alt: match?.content.main?.alt || "",
          },
          mask: match?.content.mask && {
            filename: match.content.mask.filename || "",
            alt: match.content.mask.alt || "",
          },
          promos: match?.content.promos?.map((p) => ({
            filename: p.filename,
            alt: p.alt || "",
          })) || [],
          trailer: match?.content.trailer?.url || "",
          color: match?.content.color,
          width: parseNumber(match?.content.width),
          height: parseNumber(match?.content.height),
          fontSize: parseNumber(match?.content.fontSize),
          xTranslate: parseNumber(match?.content.xTranslate),
          yTranslate: parseNumber(match?.content.yTranslate),
          position: parseNumber(match?.content.position),
          order: parseNumber(match?.content.order),
          maskOpacity: parseNumber(match?.content.maskOpacity),
        },
      });
    }

    // --- EVENT CALENDAR (shared across languages, but stored per lang for fallback simplicity)
    const { story: cal, rels: calRels } = await fetchEventCalendar();
    const calMatch = calRels?.find((r) => r.uuid === cal.content.visuals?.[0]);

    pieces.push({
      id: "event-calendar",
      title: "UPCOMING EVENTS",
      type: "calendar",
      events: cal.content.events.map((event) => {
        const date = new Date(event.date);
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return {
          id: event.id,
          name: event.name,
          date: `${y}/${m}/${d}`,
          location: event.location,
          venue: event.venue,
          country: event.country,
          link: event.link,
        };
      }),
      visuals: {
        main: {
          filename: cal.content.image.filename,
          alt: cal.content.image.alt || "",
        },
        color: calMatch?.content.color,
        width: parseNumber(calMatch?.content.width),
        height: parseNumber(calMatch?.content.height),
        fontSize: parseNumber(calMatch?.content.fontSize),
        xTranslate: parseNumber(calMatch?.content.xTranslate),
        yTranslate: parseNumber(calMatch?.content.yTranslate),
        position: parseNumber(calMatch?.content.position),
        order: parseNumber(calMatch?.content.order),
        maskOpacity: parseNumber(calMatch?.content.maskOpacity),
      },
    });

    writePerLang("pieces", lang, pieces);

    // --- PEOPLE ---
    const peopleRes = await fetchStories({
      root: "people",
      lang,
      sort: "content.order",
    });

    const people = peopleRes.stories.map((s) => ({
      id: s.content.name,
      name: s.content.name,
      bio: s.content.bio,
      type: s.content.type,
      image: s.content.image?.filename || "",
      title: s.content.title,
    }));

    writePerLang("people", lang, people);

    // --- COMPANY ---
    const companyRes = await fetchStories({ root: "company", lang });
    const company = companyRes.stories.map((s) => ({
      id: s.content.id,
      bio: s.content.bio,
    }))[0];

    writePerLang("company", lang, company);
  }
}

run().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
