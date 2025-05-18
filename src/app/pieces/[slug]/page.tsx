import { Piece } from "@/app/data/usePieces";
import { PieceDetailView } from "@/app/components/PieceDetailView";
import { Header } from "@/app/components/Header";
import React from "react";
import { LanguageKey } from "@/app/util/language";
import { notFound } from "next/navigation";
import { CalendarDetailView } from "@/app/components/CalendarDetailView";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { slug } = await params;
  const search = await searchParams;

  const language = (search.language as LanguageKey) || "ENGLISH";

  const baseUrl = process.env.BASE_URL || "";

  const response = await fetch(`${baseUrl}/api/pieces?language=${language}`);
  const pieces = await response.json();

  const piece = pieces.find((piece: Piece) => piece.id === slug);

  if (!piece) {
    notFound();
  }

  return (
    <div>
      <Header selectedLanguage={language} />
      {piece.type === "piece" && <PieceDetailView piece={piece} />}
      {piece.type === "calendar" && <CalendarDetailView piece={piece} />}
    </div>
  );
}
