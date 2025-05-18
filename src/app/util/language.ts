
export const languages = ["ENGLISH", "ESPAÑOL", "CATALÀ"] as const;
export const languageKeys = ["ENGLISH", "SPANISH", "CATALAN"] as const;
export type Language = (typeof languages)[number];
export type LanguageKey = (typeof languageKeys)[number];

export const languageNames: Record<LanguageKey, Language> = {
  ENGLISH: "ENGLISH",
  SPANISH: "ESPAÑOL",
  CATALAN: "CATALÀ",
}
