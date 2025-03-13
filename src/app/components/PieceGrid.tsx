import { motion } from "framer-motion";
import {Piece, usePieces} from "@/app/data/usePieces";

interface PieceGridProps {
  onPieceClick: (piece: Piece) => void;
  blur?: boolean;
  activePiece: Piece | null;
}

const PieceItem = ({
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
      className="relative rounded-md shadow-2xl overflow-hidden cursor-pointer w-full image-full mb-2 group"
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
        className="w-full h-full object-cover"
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          duration: 0.4,
        }}
        style={{ backgroundColor: piece.color }}
      ></motion.img>

      <div className="absolute top-0 left-0 p-4 h-full w-full flex pointer-events-none">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1046 904"
            className="m-auto pointer-events-none"
          >
            <defs>
              <pattern
                id={`image-pattern-${piece.id}`}
                patternUnits="userSpaceOnUse"
                width="1046"
                height="100%"
                patternTransform={`translate(${piece.xTranslate}, ${piece.yTranslate})`}
              >
                <rect
                  x="0"
                  y="0"
                  width="1046"
                  height="904"
                  fill={piece.color}
                />
                <image
                  href={piece.images.mask}
                  width="1046"
                  height="904"
                  opacity={0.8}
                  filter={"contrast(200%)"}
                />
              </pattern>
              <mask id={`text-mask-${piece.id}`}>
                <text
                  x="50%"
                  y="50%"
                  letterSpacing={20}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontFamily="var(--font-nunito-sans)"
                  fontSize={piece.fontSize}
                  fontWeight="700"
                  fill="white"
                >
                  {piece.title}
                </text>
              </mask>
            </defs>
            <rect
              className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-2000"
              width="1200"
              height="904"
              fill={`url(#image-pattern-${piece.id})`}
              mask={`url(#text-mask-${piece.id})`}
            />
          </svg>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <p className="text-lg text-gray-300">{piece.shortDesc}</p>
      </div>
    </motion.div>
  );
};

export const PieceGrid = ({
  onPieceClick,
  blur,
  activePiece,
}: PieceGridProps) => {
  const pieces = usePieces();
  const first_position_pieces = pieces.filter((piece) => piece.position === 0);
  const second_position_pieces = pieces.filter((piece) => piece.position === 1);
  const third_position_pieces = pieces.filter((piece) => piece.position === 2);

  return (
    <div className="inset-0 z-0 flex items-center justify-center m-2">
      <div className="relative flex gap-2 pb-2 w-full">
        <div className="w-[30%] space-y-4">
          {first_position_pieces.map((piece) => (
            <PieceItem
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

        <div className="w-[45%] space-y-4">
          {second_position_pieces.map((piece) => (
            <PieceItem
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

        <div className="w-[25%]">
          {third_position_pieces.map((piece) => (
            <PieceItem
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
