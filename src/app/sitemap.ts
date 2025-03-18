import type { MetadataRoute } from "next";
import pieces from "@/app/data/pieces.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const piecesUrls = pieces.map((piece) => ({
    url: `https://wondergroundcompany.com/pieces/${piece.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    {
      url: "https://wondergroundcompany.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://wondergroundcompany.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...piecesUrls,
  ];
}
