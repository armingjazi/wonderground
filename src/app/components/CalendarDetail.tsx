import { motion } from "framer-motion";
import type { Piece } from "@/app/data/usePieces";

export function CalendarDetail({piece}: {piece: Piece}) {
  return (
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

      <div className="flex-1 flex flex-col gap-2 sm:gap-8 items-start">
        {piece.events.map((event, index) => (
          <motion.div
            key={event.id}
            className="flex flex-row align-center items-baseline gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-xs sm:text-sm md:text-lg font-light">
              {event.date}
            </p>
            <h2 className="text-sm sm:text-xl md:text-3xl font-light mb-4">
              {event.name}
            </h2>
            <a
              className="text-xs sm:text-sm md:text-lg font-light underline"
              href={event.link?.url}
              target="_blank"
              rel="noreferrer"
            >
              {event.venue}
            </a>
            <p className="text-xs sm:text-sm md:text-lg font-light">
              {event.location}
            </p>
            <p className="hidden md:block text-sm md:text-lg font-light">
              {event.country}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
