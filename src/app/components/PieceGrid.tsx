import { Piece, usePieces } from "@/app/data/usePieces";
import { PieceItem } from "@/app/components/PieceItem";
import {EventCalendar} from "@/app/components/EventCalendar";

interface PieceGridProps {
  onPieceClick: (piece: Piece) => void;
  blur?: boolean;
  activePiece: Piece | null;
}

export const PieceFactory = ({
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
  switch (piece.type) {
    case "piece":
      return (
        <PieceItem
          piece={piece}
          onClick={onClick}
          blur={blur}
          active={active}
        />
      );
    case "calendar":
      return (
        <EventCalendar
          piece={piece}
          onClick={onClick}
          blur={blur}
          active={active}
        />
      );
    default:
      return (
        <PieceItem
          piece={piece}
          onClick={onClick}
          blur={blur}
          active={active}
        />
      );
  }
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
        <div className="hidden lg:block w-[30%] space-y-4">
          {first_position_pieces.map((piece) => (
            <PieceFactory
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

        <div className="hidden lg:block w-[45%] space-y-4">
          {second_position_pieces.map((piece) => (
            <PieceFactory
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

        <div className="hidden lg:block w-[25%]">
          {third_position_pieces.map((piece) => (
            <PieceFactory
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>
        <div className="hidden md:block lg:hidden w-[45%] space-y-4">
          {first_position_pieces.concat(third_position_pieces).map((piece) => (
            <PieceFactory
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>

        <div className="hidden md:block lg:hidden w-[55%] space-y-4">
          {second_position_pieces.map((piece) => (
            <PieceFactory
              piece={piece}
              blur={blur}
              key={piece.id}
              active={piece.id === activePiece?.id}
              onClick={() => onPieceClick(piece)}
            />
          ))}
        </div>
        <div className="md:hidden w-[100%] space-y-4">
          {pieces.map((piece) => (
            <PieceFactory
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
