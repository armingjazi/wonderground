"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieceGrid } from "@/app/components/PieceGrid";
import { PieceDetailOverlay } from "@/app/components/PieceDetailOverlay";
import { Piece, usePieces } from "@/app/data/usePieces";
import { Header } from "@/app/components/Header";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { CalendarDetailView } from "@/app/components/CalendarDetailView";
import Image from "next/image";
import { Language } from "@/app/util/language";
import { useSearchParams } from "next/navigation";


function Main() {
  const searchParams = useSearchParams();

  const language = (searchParams.get("language") as Language) || "ENGLISH";
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitialLoad(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [piece, setPiece] = useState<Piece | null>(null);
  const [about, setAbout] = useState(false);
  const { loading, pieces } = usePieces({ language });

  return (
    <div className="flex flex-col h-full bg-black text-white font-light">
      <AnimatePresence>
        {(!hasInitialLoad || loading) && (
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
              <div className="flex flex-col items-left">
                <Image
                  src="/icon_inverted.png"
                  alt="Wonderground"
                  width="32"
                  height="32"
                  className="mb-[-8]"
                />
                WONDERGROUND
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header
        onAbout={setAbout}
        selectedLanguage={language}
      />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <PieceGrid
          onPieceClick={setPiece}
          blur={!!piece || about}
          activePiece={piece}
          pieces={pieces}
        />
        {piece && piece.type === "piece" && (
          <PieceDetailOverlay piece={piece} onClose={() => setPiece(null)} />
        )}
        {piece && piece.type === "calendar" && (
          <CalendarDetailView piece={piece} onClose={() => setPiece(null)} />
        )}
        {about && <About onClose={() => setAbout(false)} />}
        <Contact />
      </main>
    </div>
  );
}


export default function Page() {
  return (
    <Suspense fallback={null}>
      <Main />
    </Suspense>
  );
}
