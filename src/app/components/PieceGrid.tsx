"use client";
import { Piece } from "@/app/data/usePieces";
import { PieceItem } from "@/app/components/PieceItem";
import { EventCalendar } from "@/app/components/EventCalendar";

interface PieceGridProps {
  onPieceClick: (piece: Piece) => void;
  blur?: boolean;
  activePiece: Piece | null;
  pieces: Piece[];
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
  pieces,
}: PieceGridProps) => {
  const mobile_pieces = pieces
    .sort((a, b) => a.visuals.order - b.visuals.order)
    .map((piece) => ({ ...piece, visualId: piece.id + "mobile" }));
  const first_desktop = pieces
    .filter((piece) => piece.visuals.position === 0)
    .map((piece) => ({ ...piece, visualId: piece.id + "first" }));
  const second_desktop = pieces
    .filter((piece) => piece.visuals.position === 1)
    .map((piece) => ({ ...piece, visualId: piece.id + "second" }));
  const third_desktop = pieces
    .filter((piece) => piece.visuals.position === 2)
    .map((piece) => ({ ...piece, visualId: piece.id + "third" }));

  const first_tablet = pieces
    .filter(
      (piece) => piece.visuals.position === 0 || piece.visuals.position === 2,
    )
    .map((piece) => ({ ...piece, visualId: piece.id + "first_tablet" }));
  const second_tablet = pieces
    .filter((piece) => piece.visuals.position === 1)
    .map((piece) => ({ ...piece, visualId: piece.id + "second_tablet" }));

  const classes = blur ? "pointer-events-none" : "";

  return (
    <div
      className={`inset-0 z-0 flex items-center justify-center m-2 ${classes}`}
    >
      <div className="relative flex gap-2 pb-2 w-full">
        <div className="hidden lg:block w-[30%] space-y-4">
          {first_desktop.map((piece) => (
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
          {second_desktop.map((piece) => (
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
          {third_desktop.map((piece) => (
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
          {first_tablet.map((piece) => (
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
          {second_tablet.map((piece) => (
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
          {mobile_pieces.map((piece) => (
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
