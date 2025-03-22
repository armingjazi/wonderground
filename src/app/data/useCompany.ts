import englishCompany from "@/app/data/company_english.json";
import catalanCompany from "@/app/data/company_catalan.json";
import spanishCompany from "@/app/data/company_spanish.json";
import { Language } from "@/app/util/language";

export const useCompany = ({ language }: { language: Language }) => {
  switch (language) {
    case "ENGLISH":
      return englishCompany;
    case "ESPAÑOL":
      return spanishCompany;
    case "CATALÀ":
      return catalanCompany;
  }
};
