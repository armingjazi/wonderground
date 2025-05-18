import { Piece } from "@/app/data/usePieces";
import { motion } from "framer-motion";

export const PieceDossier = ({ piece }: { piece: Piece }) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto p-2 w-full">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-5xl mb-4">{piece.title}</h1>
          <div className="mb-8 h-px w-24 bg-white opacity-50 mx-auto"></div>
        </motion.div>

        <motion.div
          className="rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-6xl mb-4">{piece.shortDesc}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            className="flex-1"
            initial={{ scale: 0.9}}
            whileInView={{
              scale: 1,
              transition: { duration: 1.5 },
            }}
          >
            {piece.fullDesc.split(". ").map(
              (paragraph, index) =>
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    className="mb-6 text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {paragraph.trim() + (paragraph.endsWith(".") ? "" : ".")}
                  </motion.p>
                ),
            )}
          </motion.div>
          <motion.img
            src={piece.visuals.promos[0].filename}
            alt={piece.visuals.promos[0].alt}
            className="w-full md:w-1/2 lg:w-2/3"
          />
        </div>

        <motion.p
          className="text-3xl text-center p-12 uppercase"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {piece.tagline}
        </motion.p>

        <motion.img
          src={piece.visuals.promos[1].filename}
          alt={piece.visuals.promos[1].alt}
          className="w-full md:w-2/3 lg:w-3/4 ml-[-4px] mt-4"
        />

        <motion.div
          className="m-6 md:m-12 md:pl-100"
          whileInView={{ scale: 1.1 }}
          transition={{ duration: 1.5 }}
        >
          <span
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: piece.concept }}
          />
        </motion.div>

        <motion.div
          className="flex justify-center py-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <a
            className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors cursor-pointer"
            href={piece.visuals.trailer}
            target="_blank"
          >
            WATCH TRAILER
          </a>
        </motion.div>

        <motion.img
          src={piece.visuals.promos[2].filename}
          alt={piece.visuals.promos[2].alt}
          className="w-full ml-[-4px] mt-4"
        />

        {piece.quote && (
          <motion.p
            className="m-6 md:m-12 text-3xl text-center p-12 uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            {piece.quote}
          </motion.p>
        )}

        <motion.div
          className="m-6 md:m-12 md:w-2/3 mb-12 md:p-12"
          whileInView={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
        >
          <span
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: piece.aesthetics }}
          />
        </motion.div>
      </div>

      <motion.img
        src={piece.visuals.promos[3].filename}
        alt={piece.visuals.promos[3].alt}
        className="w-full"
      />

      <div className="p-2 md:p-10">
        <span dangerouslySetInnerHTML={{ __html: piece.castAndCrew }} />
      </div>
    </div>
  );
};
