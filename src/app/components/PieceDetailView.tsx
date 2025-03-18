"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Piece } from "@/app/data/usePieces";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { PieceDossier } from "@/app/components/PieceDossier";

interface PieceDetailPageProps {
  piece: Piece;
}

export const PieceDetailView = ({ piece }: PieceDetailPageProps) => {
  return (
    <AnimatePresence>
      <motion.div className="relative inset-0 z-20 p-2 md:p-auto bg-transparent">
        <motion.div
          className="absolute inset-0 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="relative z-30 min-h-full pt-24 pb-32">
          <PieceDossier piece={piece} />

          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
