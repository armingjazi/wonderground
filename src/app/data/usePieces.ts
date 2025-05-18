import { useEffect, useState } from "react";
import { LanguageKey } from "@/app/util/language";

export interface CalEvent {
  id: string;
  date: string;
  time: string;
  name: string;
  location: string;
  country: string;
  venue?: string;
  link?: string;
}
export interface Piece {
  type: "piece" | "calendar" | "other";
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  castAndCrew: string;
  tagline: string;
  concept: string;
  quote?: string;
  aesthetics: string;
  color: string;
  width: number;
  height: number;
  fontSize?: number;
  xTranslate: number;
  yTranslate: number;
  maskOpacity?: number;
  visuals: {
    main: {
      filename: string;
      alt: string;
    }
    mask: {
      filename: string;
      alt: string;
    }
    promos: {
      filename: string;
      alt: string;
    }[]
    trailer: string;
  };
  position: 0 | 1 | 2;
  events: CalEvent[];
  order: number;
  visualId: string;
}

export const usePieces = ({
  language,
}: {
  language: LanguageKey;
}): { loading: boolean; error: Error | null; pieces: Piece[] } => {
  const [pieces, setPieces] = useState<Piece[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPieces = async () => {
      if (!isMounted) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/pieces?language=${language}`);
        if (!response.ok) {
          setError(
            new Error(
              `Failed to fetch pieces data: ${response.status} ${response.statusText}`,
            ),
          );
          return;
        }

        const data = await response.json();

        if (isMounted) {
          setPieces(data);
        }
      } catch (err) {
        console.error("Error fetching pieces:", err);

        if (isMounted) {
          setError(err instanceof Error ? err : new Error(String(err)));
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPieces().catch((err) => {
      console.error("Unhandled error in fetchPieces:", err);
      if (isMounted) {
        setError(err instanceof Error ? err : new Error(String(err)));
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [language]);

  return { loading, error, pieces };
};
