import { LanguageKey } from "@/app/util/language";
import { useEffect, useState } from "react";

export interface Company {
  bio: string;
}

export const useCompany = ({
  language,
}: {
  language: LanguageKey;
}): { loading: boolean; error: Error | null; company: Company } => {
  const [company, setCompany] = useState<Company>({
    bio:
      "Founded in 2018 in Barcelona by Roser Tutusaus and Tom Weksler, WONDERGROUND is a platform for artistic research and creation. We craft Kinetic Poems and Meditative Spectacles, uncovering hidden stories within the body and posing universal questions about humanity and its nature.\n" +
      "Our work explores themes such as the individual, community, love, ecology, wilderness, death, and revelation, shaping performances that are both captivating and physically rich.\n" +
      "We merge Contemporary Dance, Acrobatics, Butoh, partnering, text, and ephemeral architectures into a living interdisciplinary language.\n" +
      "Our research is rooted in Movement Archery, a practice that refines sensitivity, perception, and technique, guiding both our pedagogy and creative process.\n" +
      "In 2022, we established The Island, our creative workspace in the forested outskirts of Barcelona. This is a space for practice, creation, and artistic exchange, where we also host workshops and laboratories.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchCompany = async () => {
      if (!isMounted) return;

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/company?language=${language}`);
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
          setCompany(data);
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

    fetchCompany().catch((err) => {
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

  return { loading, error, company };
};
