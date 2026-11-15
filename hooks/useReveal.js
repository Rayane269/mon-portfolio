import { useRouter } from "next/router";
import { useEffect } from "react";

// Fait apparaître en douceur tous les éléments marqués `data-reveal`
// lorsqu'ils entrent dans l'écran. Sans JS, le contenu reste visible.
const useReveal = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    // laisse le temps au nouveau contenu de la page d'être rendu
    const id = requestAnimationFrame(() => {
      document
        .querySelectorAll("[data-reveal]:not(.is-in)")
        .forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(id);
      observer.disconnect();
    };
  }, [asPath]);
};

export default useReveal;
