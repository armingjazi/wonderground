import { AnimatePresence, motion } from "framer-motion";
import { CloseButton } from "@/app/components/CloseButton";
import { People } from "@/app/components/People";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";
import { BackToTopButton } from "@/app/components/BackToTopButton";

export const About = ({ onClose }: { onClose: () => void }) => {
  const root = useScrollAnimation(onClose);
  return (
    <AnimatePresence>
      <motion.div
        className="absolute md:relative inset-0 z-20 md:-mt-96 p-2 md:p-auto bg-black opacity-50 md:bg-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={onClose}
        />

        <div className="relative z-30 min-h-full pt-24 pb-32" ref={root}>
          <People />

          <CloseButton onClick={onClose} />
          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
