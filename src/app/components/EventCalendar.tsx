'use client';
import { Piece } from "@/app/data/usePieces";
import { motion } from "framer-motion";

export const EventCalendar = ({
  piece,
  blur,
  onClick,
  active,
}: {
  piece: Piece;
  onClick: () => void;
  blur?: boolean;
  active: boolean;
}) => {
  return (
    <motion.div
      key={piece.id}
      className="relative rounded-md shadow-2xl overflow-hidden cursor-pointer w-full image-full mb-8 group"
      style={{
        backgroundColor: piece.color,
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
      }}
      initial={{
        height: piece.height,
      }}
      animate={{
        filter: blur ? "blur(20px)" : "none",
        scale: blur ? (active ? 1.2 : 0.7) : 1,
      }}
      whileHover={{
        transition: { duration: 0.3 },
        zIndex: 10,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
      }}
      onClick={onClick}
    >
      <motion.img
        src={piece.images.main}
        className="w-full h-full object-cover "
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.4,
        }}
        style={{ backgroundColor: piece.color }}
      ></motion.img>
      <div className="absolute top-4 left-0 pt-6 pl-2 h-4/5 w-full flex flex-col flex-wrap pointer-events-none">
        {piece.events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-black opacity-50 p-2 rounded-md bg-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1
              className="text-white text-sm sm:text-lg md:text-2xl font-normal tracking-wide sm:tracking-wider md:tracking-widest"
            >
              {event.name}
            </h1>
            <p className="text-white text-xs sm:text-sm font-normal">{event.date}</p>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/100 to-transparent">
        <p className="text-lg text-white">{piece.shortDesc}</p>
      </div>
    </motion.div>
  );
};
