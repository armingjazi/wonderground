"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Piece } from "@/app/data/usePieces";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { CalendarDetail } from "@/app/components/CalendarDetail";

interface PieceDetailViewProps {
  piece: Piece;
}

export const CalendarDetailView = ({ piece }: PieceDetailViewProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="inset-0 z-20 p-2 md:p-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative z-30 min-h-full pt-24 pb-32 bg-black md:bg-transparent">
          <CalendarDetail piece={piece} />
          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
