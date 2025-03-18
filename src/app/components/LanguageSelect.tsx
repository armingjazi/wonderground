'use client';

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";
import { Language, languages } from "@/app/util/language";

export const LanguageSelect = ({
  onChange,
  selectedLanguage,
}: {
  onChange: (lang: Language) => void;
  selectedLanguage: Language;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language: Language) => {
    onChange(language);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="relative">
        <motion.button
          className="flex items-center space-x-2 px-3 py-2 bg-black rounded-md cursor-pointer"
          onClick={toggleDropdown}
          whileTap={{ scale: 0.97 }}
        >
          <span className="text-white text-sm">{selectedLanguage}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-white"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute mt-1 w-full bg-gray-800 rounded-md shadow-lg overflow-hidden z-10 border-[1px] border-gray-500"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.ul className="py-1">
                {languages.map((language) => (
                  <motion.li
                    key={language}
                    whileHover={{ backgroundColor: "#bdbdbd", color: "#000" }}
                    className={`px-4 py-1 cursor-pointer text-sm ${
                      selectedLanguage === language
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                    onClick={() => selectLanguage(language)}
                  >
                    {language}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
