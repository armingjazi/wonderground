import { Language } from "@/app/util/language";
import englishPeople from "@/app/data/about_english.json";
import spanishPeople from "@/app/data/about_español.json";
import catalanPeople from "@/app/data/about_català.json";

export interface Person {
  id: string;
  name: string;
  bio: string;
  image: string;
  title?: string;
  type: "main" | "collaborator";
}

export const usePeople = ({ language }: { language: Language }): Person[] => {
  switch (language) {
    case "ENGLISH":
      return englishPeople as Person[];
    case "ESPAÑOL":
      return spanishPeople as Person[];
    case "CATALÀ":
      return catalanPeople as Person[];
  }
};
