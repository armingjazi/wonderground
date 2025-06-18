"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PieceGrid } from "@/app/components/PieceGrid";
import { PieceDetailOverlay } from "@/app/components/PieceDetailOverlay";
import { Piece, usePieces } from "@/app/data/usePieces";
import { Header } from "@/app/components/Header";
import { AboutOverlay } from "@/app/components/AboutOverlay";
import { Contact } from "@/app/components/Contact";
import { CalendarDetailOverlay } from "@/app/components/CalendarDetailOverlay";
import { LanguageKey } from "@/app/util/language";
import { useRouter, useSearchParams } from "next/navigation";
import { useBreakpoint } from "@/app/util/useBreakpoint";
import { TeamOverlay } from "@/app/components/TeamOverlay";

function Main() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isXs, isSm, isMd } = useBreakpoint();

  const isMobile = isXs || isSm || isMd;

  const language = (searchParams.get("language") as LanguageKey) || "ENGLISH";
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitialLoad(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [piece, setPiece] = useState<Piece | null>(null);
  const [about, setAbout] = useState(false);
  const [team, setTeam] = useState(false);
  const { loading, pieces } = usePieces({ language });

  const handlePieceClick = (piece: Piece) => {
    if (!isMobile) {
      setPiece(piece);
    } else {
      router.push(`/pieces/${piece.id}?language=${language}`);
    }
  };

  const handleAboutClick = () => {
    if (!isMobile) {
      setAbout(true);
    } else {
      router.push(`/about?language=${language}`);
    }
  };

  const handleTeamClick = () => {
    if (!isMobile) {
      setTeam(true);
    } else {
      router.push(`/team?language=${language}`);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black text-white font-light">
      <AnimatePresence>
        {(!hasInitialLoad || loading) && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center flex-col"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 2 }}
              className="text-4xl tracking-widest font-light"
            >
              WONDERGROUND
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg tracking-widest font-extralight mt-8"
            >
              By
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, delay: 1.5 }}
              className="text-xl mt-4 font-light tracking-widest"
            >
              Roser Tutusaus & Tom Weksler
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header
        onAbout={handleAboutClick}
        onTeam={handleTeamClick}
        selectedLanguage={language}
      />
      <main className="flex-1 flex flex-col overflow-y-auto">
        <PieceGrid
          onPieceClick={handlePieceClick}
          blur={!!piece || about || team}
          activePiece={piece}
          pieces={pieces}
        />
        {piece && piece.type === "piece" && (
          <PieceDetailOverlay piece={piece} onClose={() => setPiece(null)} />
        )}
        {piece && piece.type === "calendar" && (
          <CalendarDetailOverlay piece={piece} onClose={() => setPiece(null)} />
        )}
        {about && (
          <AboutOverlay language={language} onClose={() => setAbout(false)} />
        )}
        {team && (
          <TeamOverlay language={language} onClose={() => setTeam(false)} />
        )}
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
