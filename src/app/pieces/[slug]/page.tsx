import { Piece } from "@/app/data/usePieces";
import { PieceDetailView } from "@/app/components/PieceDetailView";
import { headers } from "next/headers";
import { Header } from "@/app/components/Header";
import React from "react";
import { Language } from "@/app/util/language";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const { slug } = await params;
  const search = await searchParams;

  const language = (search.language as Language) || "ENGLISH";

  const headersList = await headers();
  const host = headersList.get("host") || "localhost:3000";
  const proto = process.env.NODE_ENV === "production" ? "https" : "http";

  const baseUrl = `${proto}://${host}`;

  const response = await fetch(`${baseUrl}/api/pieces?language=${language}`);
  const pieces = await response.json();

  const piece = pieces.find((piece: Piece) => piece.id === slug);

  if (!piece) {
    return <div>404: Not found</div>;
  }

  return (
    <div>
      <Header selectedLanguage={language} />
      <PieceDetailView piece={piece} />
    </div>
  );
}

export async function generateStaticParams() {

  const {default: pieces } = await import("@/app/data/pieces.json");

  return (pieces as Piece[]).map((piece: Piece) => ({
    params: { slug: piece.id },
  }));
}
