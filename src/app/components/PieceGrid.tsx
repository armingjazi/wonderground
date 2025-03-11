import { motion } from "framer-motion";

export interface Piece {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  castAndCrew: string;
  color: string;
  width: number;
  height: number;
  image: string;
  maskImage: string;
  fontSize?: number;
  xTranslate: number;
  yTranslate: number;
}

const pieces = [
  {
    id: "wall-peace",
    title: "WALL & PEACE",
    shortDesc: "A site-specific night following two men, a wall, and a woman.",
    fullDesc:
      "Through dance, circus and martial arts, the two men rediscover their friendship and perhaps, their place in the world. The show transforms the public space into an imaginary theatrical landscape that pushes the boundaries of artisanal aesthetics and physical storytelling.",
    castAndCrew: "",
    color: "rgb(58,255,0)",
    width: 380,
    height: 500,
    fontSize: 100,
    xTranslate: 100,
    yTranslate: -250,
    image: "/pieces/wall_and_peace.png",
    maskImage: "/pieces/wall_and_peace.png",
  },
  {
    id: "after-rain",
    title: "AFTER THE RAIN",
    shortDesc: "A kinetic poem about letting go of someone you love.",
    fullDesc:
      "Through an energetic dance of forces, open narratives and transient landscapes; The meeting and constant transformation of two individuals awakens unexpected memories about the nature of our lives. After the Rain is a dance of hopes and fears.",
    castAndCrew: "",
    color: "#ff0000",
    width: 200,
    height: 300,
    fontSize: 90,
    xTranslate: -500,
    yTranslate: -10,
    image: "/pieces/after_the_rain.png",
    maskImage: "/pieces/after_the_rain.png",
  },
  {
    id: "momentum",
    title: "MOMENTUM",
    shortDesc: "A mythological tale about humans, nature and gravity.",
    fullDesc:
      "With this definition, the company presents a new work in which three dancers—two women and one man—and a live musician delve into the contemporary interaction between the environment, gravity and desire. Through them, we embark on a journey through alternative natures, kinetic forces, human relationships, and internal landscapes. So, for our next show, we decided to focus on the concept of momentum, exploring why it continues to captivate us and the poetic dimensions it might reveal. ",
    castAndCrew: "<strong> Concept, choreography and direction</strong> Roser Tutusaus and Tom Weksler / Dancers Tom Weksler, Nora Baylach and Yuval Finkelshtein / Original music and artistic collaboration  Miguel Marin Pavón / Lighting Design Filip Horn / Costumes Design Benjamin Nivison / Col·laboració artística Oded Avinathan, Ariadna Montfort and Joan Català / Participants of the first phase of creation Carla Piris Lasaga and Girordan Cruz / Communication and promotion during the creation A129Lacarte -  Anso Raybaut-Pérès / Distribution Fani Benages / Production Wonderground / Videography Ignasi Castañé / Photography Aida Vargas / Coproduction/Mercat de les Flors and Ajuntament de Tarragona / Residencies / El Canal Centre d’arts Escèniques de Salt and The Island / Supported By Beca recerca OSIC, Departament de Cultura-Generalitat de Catalunya i l’Institut Ramón Llull.",
    color: "#5DAD8C",
    width: 460,
    height: 240,
    fontSize: 140,
    xTranslate: 100,
    yTranslate: 0,
    image: "/pieces/momentum.png",
    maskImage: "/pieces/falling_man.png",
  },
  {
    id: "rise",
    title: "RISE",
    shortDesc: "A wild brushstroke of calligraphy in public space.",
    fullDesc:
      "It is the movement forwards and upwards, from distant to intimate that drives this performance. An invitation to ask what it is to be human. It is a unique street spectacle that interacts with the audience and erases the boundary between dance, daily movement and acrobatics.",
    castAndCrew: "",
    color: "rgba(255,255,255)",
    width: 160,
    height: 600,
    fontSize: 180,
    xTranslate: -400,
    yTranslate: 100,
    image: "/pieces/rise.png",
    maskImage: "/pieces/rise.png",
  },
  {
    id: "falling-man",
    title: "THE FALLING MAN",
    shortDesc: "Questioning dance, imagination, and mental health.",
    fullDesc:
      "It moves between collective memory and the personal, creating a fluid flow of images inspired by the act of falling. Falling is an archetype that has accompanied humans from ancient times to the present.",
    castAndCrew: "",
    color: "rgb(175,100,60)",
    width: 260,
    height: 800,
    fontSize: 80,
    xTranslate: -300,
    yTranslate: 10,
    image: "/pieces/falling_man.png",
    maskImage: "/pieces/falling_man.png",
  },
];

interface PieceGridProps {
  onPieceClick: (piece: Piece) => void;
  blur?: boolean;
  activePiece: Piece | null;
}

const PieceItem = ({
  piece,
  blur,
  onClick,
  active
}: {
  piece: Piece;
  onClick: () => void;
  blur?: boolean;
  active: boolean;
}) => {
  return (
    <motion.div
      key={piece.id}
      className="relative rounded-lg shadow-2xl overflow-hidden cursor-pointer w-full image-full mb-2 group"
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
        src={piece.image}
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
                  href={piece.maskImage}
                  width="1046"
                  height="904"
                  opacity={0.8}
                  filter={'contrast(200%)'}
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
              className='opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-2000'
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
  return (
    <div className="inset-0 z-0 flex items-center justify-center m-2">
      <div className="relative columns-1 xs:columns-1 sm:columns-2 md:columns-3 gap-2 pb-2 w-1040">
        {pieces.map((piece) => (
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
  );
};
