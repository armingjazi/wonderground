"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Piece } from "@/app/data/usePieces";
import { CloseButton } from "@/app/components/CloseButton";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { CalendarDetail } from "@/app/components/CalendarDetail";

interface PieceDetailViewProps {
  piece: Piece;
  onClose: () => void;
}

export const CalendarDetailOverlay = ({
  piece,
  onClose,
}: PieceDetailViewProps) => {
  const root = useScrollAnimation(onClose);

  return (
    <AnimatePresence>
      <motion.div
        className="absolute md:relative inset-0 z-20 mt-18 md:-mt-96 p-2 md:p-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-30 min-h-full pt-24 pb-32 bg-black md:bg-transparent" ref={root}>
          <CalendarDetail piece={piece} />
          <CloseButton onClick={onClose} />
          <BackToTopButton
            onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
