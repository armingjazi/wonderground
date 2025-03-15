import { AnimatePresence, motion } from "framer-motion";
import { CloseButton } from "@/app/components/CloseButton";
import { People } from "@/app/components/People";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";

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
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-12 right-1/2 z-50 text-3xl hover:opacity-70 transition-opacity bg-black/50 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
