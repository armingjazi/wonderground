import React from "react";
import { AboutView } from "@/app/components/AboutView";
import { LanguageKey } from "@/app/util/language";
import { Header } from "@/app/components/Header";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) {
  const search = await searchParams;

  const language = (search.language as LanguageKey) || "ENGLISH";

  return (
    <div>
      <Header selectedLanguage={language} />
      <AboutView language={language} />
    </div>
  );
}
