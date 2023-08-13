import { useEffect, useRef } from "react";

export const useInfiniteScroll = <T extends HTMLElement>(callback: () => void) => {
  const target = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, ob) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ob.unobserve(entry.target);
            callback();
          }
        });
      },
      { threshold: 0.5 },
    );
    
    target.current && observer.observe(target.current);

    return () => {
      observer.disconnect();
    };
  }, [callback]);

  return { target } as const;
};
