import { useEffect } from "react";
import { useIsVisible } from "@/app/util/useIsVisible";

export function useScrollAnimation(onClose: () => void) {
  const [visibleRef, isVisible] = useIsVisible<HTMLDivElement>();

  useEffect(() => {
    if (!visibleRef.current) return;

    let isAnimatingScroll = false;

    const handleScroll = () => {
      if (!isVisible && !isAnimatingScroll) {
        onClose();
      }
    };

    window.addEventListener("scroll", handleScroll);

    let scrollTimeout: NodeJS.Timeout | null = null;

    if (visibleRef.current) {
      scrollTimeout = setTimeout(() => {
        const elementRect = visibleRef.current?.getBoundingClientRect();
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
  }, [isVisible, visibleRef, onClose]);
  return visibleRef;
}
