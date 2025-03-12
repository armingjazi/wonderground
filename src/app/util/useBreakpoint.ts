import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState({
    isXs: false,
    isSm: false,
    isMd: false,
    isLg: false,
    isXl: false,
    is2xl: false,
  });

  useEffect(() => {
    const updateBreakpoint = () => {
      setBreakpoint({
        isXs: window.innerWidth < 640,
        isSm: window.innerWidth >= 640 && window.innerWidth < 768,
        isMd: window.innerWidth >= 768 && window.innerWidth < 1024,
        isLg: window.innerWidth >= 1024 && window.innerWidth < 1280,
        isXl: window.innerWidth >= 1280 && window.innerWidth < 1536,
        is2xl: window.innerWidth >= 1536,
      });
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}
