import { useEffect, useRef, useState } from "react";

// Curseur personnalisé (souris uniquement) qui suit le pointeur avec inertie
// et grossit au survol des liens. Les éléments avec `data-cursor="Texte"`
// affichent un libellé dans le curseur.
const Cursor = () => {
  const ref = useRef(null);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const el = ref.current;
    let x = -100,
      y = -100,
      cx = -100,
      cy = -100,
      raf;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.remove("is-hidden");
    };
    const over = (e) => {
      const target = e.target.closest("a, button, [data-cursor]");
      el.classList.toggle("is-hover", !!target);
      setLabel(target?.dataset?.cursor || "");
    };
    const leave = () => el.classList.add("is-hidden");

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={ref} className="cursor is-hidden" aria-hidden="true">
      {label}
    </div>
  );
};

export default Cursor;
