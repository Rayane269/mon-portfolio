import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const cards = [
  {
    title: "Tableau de synthèse E5",
    subtitle: "Lien missions – compétences",
    description: "Synthèse reliant mes missions E5 aux compétences du référentiel BTS SIO.",
    image: "/images/numerique/virtual-product.jpg",
    link: "/documents/Tableau_de_synthese_E5.pdf",
    tone: "bg-lilac",
  },
  {
    title: "Veille technologique",
    subtitle: "Méthodologie et analyse",
    description: "Présentation de ma démarche de veille, des outils utilisés et du sujet étudié.",
    image: "/images/numerique/veille.png",
    link: "/veille",
    tone: "bg-butter",
  },
  {
    title: "Support de soutenance E5",
    subtitle: "Présentation orale",
    description: "Diaporama de soutenance présentant mes missions et mon parcours.",
    image: "/images/numerique/soutenance.png",
    link: "/documents/Support_de_soutenance_E5.pdf",
    tone: "bg-mint",
  },
];

export default function DisciplineCards() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card, index) => {
        const isFile = card.link.endsWith(".pdf");
        return (
          <Link
            key={index}
            href={card.link}
            {...(isFile ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            data-reveal
            data-cursor={isFile ? "Ouvrir" : "Voir"}
            style={{ "--d": `${index * 110}ms` }}
            className={`group relative flex min-h-[460px] flex-col overflow-hidden rounded-4xl ${card.tone} p-7 text-ink transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] hover:-translate-y-2 md:p-8`}
          >
            <div className="flex items-center justify-between">
              <span className="font-secondary text-sm font-bold">0{index + 1}</span>
              <span className="rounded-full border border-ink/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                {card.subtitle}
              </span>
            </div>

            {/* floating preview */}
            <div className="relative mx-auto my-8 h-44 w-[78%] rotate-[-4deg] overflow-hidden rounded-2xl shadow-[0_25px_50px_-20px_rgba(20,20,22,.45)] transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)] group-hover:rotate-0 group-hover:scale-105">
              <Image
                src={card.image}
                alt=""
                fill
                sizes="(min-width: 768px) 25vw, 80vw"
                className="object-cover"
              />
            </div>

            <div className="mt-auto flex items-end justify-between gap-4">
              <div>
                <h3 className="font-secondary text-[1.75rem] font-extrabold leading-[1.05] tracking-tight !text-ink">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
                  {card.description}
                </p>
              </div>
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:-rotate-45">
                <IoArrowForward />
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
