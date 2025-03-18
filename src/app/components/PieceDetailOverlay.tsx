"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Piece } from "@/app/data/usePieces";
import { CloseButton } from "@/app/components/CloseButton";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";
import { BackToTopButton } from "@/app/components/BackToTopButton";
import { PieceDossier } from "@/app/components/PieceDossier";

interface PieceDetailViewProps {
  piece: Piece;
  onClose: () => void;
}

export const PieceDetailOverlay = ({ piece, onClose }: PieceDetailViewProps) => {
  const rootRef = useScrollAnimation(onClose);

  return (
    <AnimatePresence>
      <motion.div
        className="absolute md:relative inset-0 z-20 mt-18 md:-mt-224 p-2 md:p-auto"
      >
        <div className="relative z-30 min-h-full pt-24 pb-32 bg-black md:bg-transparent" ref={rootRef}>
          <PieceDossier piece={piece} />

          <CloseButton onClick={onClose} />
          <BackToTopButton
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
