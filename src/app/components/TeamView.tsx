"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { LanguageKey } from "@/app/util/language";
import { Team } from "@/app/components/Team";

export const TeamView = ({ language }: { language: LanguageKey }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="inset-0 z-20 md:p-auto"
        transition={{ duration: 1 }}
      >
        <div className="relative z-30 min-h-full pb-32">
          <Team language={language} />

          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
