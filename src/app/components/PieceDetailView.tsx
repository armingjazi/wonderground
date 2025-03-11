import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

import { Piece } from "@/app/components/PieceGrid";
import { useEffect, useRef } from "react";

interface PieceDetailViewProps {
  piece: Piece;
  onClose: () => void;
}

export const PieceDetailView = ({ piece, onClose }: PieceDetailViewProps) => {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isAnimatingScroll = false;

    const handleScroll = () => {
      if (window.scrollY <= 5 && !isAnimatingScroll) {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);

    let scrollTimeout: NodeJS.Timeout | null = null;

    if (root.current) {
      scrollTimeout = setTimeout(() => {
        const elementRect = root.current?.getBoundingClientRect();
        if (!elementRect) return;

        const absoluteElementTop = elementRect.top + window.pageYOffset;

        const duration = 1500;
        const start = window.pageYOffset;
        const distance = absoluteElementTop - start;
        let startTime: number | null = null;

        const easeInCubic = (t: number) => t * t * t;

        function animateScroll(currentTime: number) {
          isAnimatingScroll = true;

          if (startTime === null) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          window.scrollTo(0, start + distance * easeInCubic(progress));

          // Continue animation if not complete
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isAnimatingScroll = false;
          }
        }

        requestAnimationFrame(animateScroll);
      }, 100);
    }

    // Cleanup event listener and timeout on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="inset-0 z-20 mt-[-512px]"
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
          <div className="max-w-4xl mx-auto px-6">
            {/* Title first */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl mb-4 font-medium">{piece.title}</h1>
              <div className="mb-8 h-px w-24 bg-white opacity-50 mx-auto"></div>
            </motion.div>

            {/* Content */}
            <motion.div
              className=" rounded-lg p-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {piece.fullDesc.split(". ").map(
                (paragraph, index) =>
                  paragraph.trim() && (
                    <motion.p
                      key={index}
                      className="mb-6 text-lg leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      {paragraph.trim() + (paragraph.endsWith(".") ? "" : ".")}
                    </motion.p>
                  ),
              )}
            </motion.div>

            {/* CTA button */}
            <motion.div
              className="flex justify-center py-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                WATCH TRAILER
              </button>
            </motion.div>
          </div>

          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="fixed top-6 right-6 z-50 text-3xl hover:opacity-70 transition-opacity bg-black/50 w-10 h-10 rounded-full flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
          >
            &times;
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
