import { Language } from "@/app/util/language";
import { useEffect, useState } from "react";

export interface Person {
  id: string;
  name: string;
  bio: string;
  image: string;
  title?: string;
  type: "main" | "collaborator" | "performer" | "media";
}

export const usePeople = ({
  language,
}: {
  language: Language;
}): { loading: boolean; error: Error | null; people: Person[] } => {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchPeople = async () => {
      if (!isMounted) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/people?language=${language}`);
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
          setPeople(data);
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

    fetchPeople().catch((err) => {
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

  return { loading, error, people };
};
