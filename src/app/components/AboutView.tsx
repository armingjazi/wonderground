"use client";

import { AnimatePresence, motion } from "framer-motion";
import { People } from "@/app/components/People";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { Language } from "@/app/util/language";

export const AboutView = ({ language }: { language: Language }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="inset-0 z-20 md:p-auto"
        transition={{ duration: 1 }}
      >
        <div className="relative z-30 min-h-full pb-32">
          <People language={language} />

          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
