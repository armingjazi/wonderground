import { useEffect, useRef } from "react";
import { useBreakpoint } from "@/app/util/useBreakpoint";

export function useScrollAnimation(onClose: () => void) {
  const root = useRef<HTMLDivElement>(null);

  const { isXs, isSm, isMd } = useBreakpoint();

  const isSingleRow = isXs || isSm || isMd;

  console.log(isXs, isSm, isMd, isSingleRow);

  useEffect(() => {
    if (isSingleRow) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (!root.current) return;

    let isAnimatingScroll = false;

    const handleScroll = () => {
      if (window.scrollY < 20 && !isAnimatingScroll) {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);

    let scrollTimeout: NodeJS.Timeout | null = null;

    if (root.current) {
      scrollTimeout = setTimeout(() => {
        const elementRect = root.current?.getBoundingClientRect();
        if (!elementRect) return;

        const absoluteElementTop = elementRect.top + window.pageYOffset;

        const duration = 1500;
        const start = window.pageYOffset;
        const distance = absoluteElementTop - start;
        let startTime: number | null = null;

        const easeInCubic = (t: number) => t * t * t;

        function animateScroll(currentTime: number) {
          isAnimatingScroll = true;

          if (startTime === null) startTime = currentTime;
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);

          window.scrollTo(0, start + distance * easeInCubic(progress));

          // Continue animation if not complete
          if (progress < 1) {
            requestAnimationFrame(animateScroll);
          } else {
            isAnimatingScroll = false;
          }
        }

        requestAnimationFrame(animateScroll);
      }, 100);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isSingleRow, root, onClose]);
  return root;
}
