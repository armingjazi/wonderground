import { RefObject, useEffect, useRef, useState } from "react";

export function useIsVisible<T extends HTMLDivElement>(): [
  RefObject<T | null>,
  boolean,
] {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Update state when observer callback fires
      setIsVisible(entry.isIntersecting);
    }, {
      rootMargin: "20px",
    });

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
}
