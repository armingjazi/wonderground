import { AnimatePresence, motion } from "framer-motion";
import { CloseButton } from "@/app/components/CloseButton";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { LanguageKey } from "@/app/util/language";
import { Team } from "@/app/components/Team";

export const TeamOverlay = ({
  onClose,
  language,
}: {
  onClose: () => void;
  language: LanguageKey;
}) => {
  const root = useScrollAnimation(onClose);
  return (
    <AnimatePresence>
      <motion.div
        className="absolute md:relative inset-0 z-20 mt-18 md:-mt-100 p-2 md:p-auto"
        transition={{ duration: 1 }}
      >
        <div
          className="relative z-30 min-h-full pt-24 pb-32 bg-black md:bg-transparent"
          ref={root}
        >
          <Team language={language} />
          <CloseButton onClick={onClose} />
          <BackToTopButton
            onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
