import { motion } from "framer-motion";
import React, { MouseEvent } from "react";
import { LanguageSelect } from "@/app/components/LanguageSelect";
import Image from "next/image";
import { Language } from "@/app/util/language";

export const Header = ({
  onAbout,
  onLanguageChange,
  selectedLanguage,
}: {
  onAbout: (show: boolean) => void;
  onLanguageChange: (language: Language) => void;
  selectedLanguage: Language;
}) => {
  const handleAboutClick = (e: MouseEvent) => {
    e.preventDefault();
    onAbout(true);
  };

  return (
    <motion.header
      className="p-6 flex justify-between items-center z-10 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="flex items-center align-center">
        <Image
          src="/icon_inverted.png"
          alt="Wonderground"
          width="32"
          height="32"
          className="mr-[-4]"
        />
        <div className="text-l md:text-xl tracking-widest">ONDERGROUND</div>
      </div>
      <div className="flex-grow" />
      <div className="flex items-center gap-6">
        <nav className="flex gap-6 text-sm">
          <a href="#" onClick={handleAboutClick} className="hover:underline">
            ABOUT
          </a>
        </nav>
        <LanguageSelect
          onChange={onLanguageChange}
          selectedLanguage={selectedLanguage}
        />
      </div>
    </motion.header>
  );
};
