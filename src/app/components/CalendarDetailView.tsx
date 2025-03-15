"use client";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Piece } from "@/app/data/usePieces";
import { CloseButton } from "@/app/components/CloseButton";
import { useScrollAnimation } from "@/app/util/useScrollAnimation";

interface PieceDetailViewProps {
  piece: Piece;
  onClose: () => void;
}

export const CalendarDetailView = ({ piece, onClose }: PieceDetailViewProps) => {
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
          <div className="max-w-6xl mx-auto p-2">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-5xl mb-4">{piece.title}</h1>
              <div className="mb-8 h-px w-24 bg-white opacity-50 mx-auto"></div>
            </motion.div>

            <div className="flex-1 flex flex-col gap-8 items-start">
              {
                piece.events.map((event, index) => (
                  <motion.div
                    key={event.id}
                    className="flex flex-row align-center items-baseline gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <p className="text-sm md:text-lg font-light">{event.date}</p>
                    <h2 className="text-xl md:text-3xl font-light mb-4">{event.name}</h2>
                    <a className='text-sm md:text-lg font-light underline' href={event.link} target="_blank" rel="noreferrer">{event.venue}</a>
                    <p className="text-sm md:text-lg font-light">{event.location}</p>
                    <p className="text-sm md:text-lg font-light">{event.country}</p>
                  </motion.div>
                ))
              }
            </div>

          </div>

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
