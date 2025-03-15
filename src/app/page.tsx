"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieceGrid } from "@/app/components/PieceGrid";
import { PieceDetailView } from "@/app/components/PieceDetailView";
import { Piece } from "@/app/data/usePieces";
import { Header } from "@/app/components/Header";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { CalendarDetailView } from "@/app/components/CalendarDetailView";

export default function Page() {
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitialLoad(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [piece, setPiece] = useState<Piece | null>(null);
  const [about, setAbout] = useState(false);

  return (
    <div className="flex flex-col h-full bg-black text-white font-light">
      <AnimatePresence>
        {!hasInitialLoad && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 2 }}
              className="text-4xl tracking-widest font-extralight"
            >
              WONDERGROUND
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header onAbout={setAbout} />
      <main className="flex-1 flex flex-col">
        <PieceGrid onPieceClick={setPiece} blur={!!piece || about} activePiece={piece} />
        {piece && (piece.type === "piece") && (
          <PieceDetailView piece={piece} onClose={() => setPiece(null)} />
        )}
        {
          piece && (piece.type === "calendar") && (
            <CalendarDetailView piece={piece} onClose={() => setPiece(null)} />
          )
        }
        {about && <About onClose={() => setAbout(false)} />}
        <Contact />
      </main>
    </div>
  );
}
