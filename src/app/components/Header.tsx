'use client';

import { motion } from "framer-motion";
import React, { MouseEvent } from "react";
import { LanguageSelect } from "@/app/components/LanguageSelect";
import Image from "next/image";
import { Language } from "@/app/util/language";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Header = ({
  onAbout,
  selectedLanguage,
}: {
  onAbout?: (show: boolean) => void;
  selectedLanguage: Language;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleAboutClick = (e: MouseEvent) => {
    e.preventDefault();
    onAbout?.(true);
  };

  const handleLanguageChange = (language: Language) => {
    router.push(`${pathname}?language=${language}`);
  };

  return (
    <motion.header
      className="p-6 flex justify-between items-center z-30 relative "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <Link className="items-left cursor-pointer" href="/">
        <Image
          src="/icon_inverted.png"
          alt="Wonderground"
          width="305"
          height="359"
          className="inline sm:hidden sm:mb-[-8] w-8 h-8 sm:w-6 sm:h-6"
        />
        <span className="hidden sm:inline text-l md:text-xl tracking-widest">WONDERGROUND</span>
      </Link>
      <div className="flex-grow" />
      <div className="flex items-center gap-6">
        {onAbout &&
          <nav className="flex gap-6 text-sm">
            <a href="#" onClick={handleAboutClick} className="hover:underline">
              ABOUT
            </a>
          </nav>
        }
        <LanguageSelect
          onChange={handleLanguageChange}
          selectedLanguage={selectedLanguage}
        />
      </div>
    </motion.header>
  );
};
