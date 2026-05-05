import Image from "next/image";
import Link from "next/link";

const cards = [
  
  {
    title: "Tableau de synthèse E5",
    subtitle: "Lien missions – compétences",
    description: "Synthèse reliant mes missions E5 aux compétences du référentiel BTS SIO.",
    image: "/images/numerique/virtual-product.jpg",
    link: "/public/documents/Tableau_de_synthese_E5.pdf" // Lien vers le PDF
  },
  {
    title: "Veille technologique",
    subtitle: "Méthodologie et analyse",
    description: "Présentation de ma démarche de veille, des outils utilisés et du sujet étudié.",
    image: "/images/numerique/veille.png",
    link: "/veille" // Lien vers la page que nous venons de créer
  },
  {
    title: "Support de soutenance E5",
    subtitle: "Présentation orale",
    description: "Diaporama de soutenance présentant mes missions et mon parcours.",
    image: "/images/numerique/soutenance.png",
    link: "/posts"
  },
    
];

export default function DisciplineCards() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative h-[480px] rounded-2xl overflow-hidden group"
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition" />

            {/* Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-between text-white">
              <div>
                <p className="text-sm tracking-widest opacity-80 uppercase">
                  {card.subtitle}
                </p>
                <h3 className="text-3xl font-bold mt-2 text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed font-bold opacity-90">
                  {card.description}
                </p>
              </div>

              {/* Utilisation de Link au lieu de button */}
              <Link 
                href={card.link} 
                className="w-fit flex items-center gap-2 border border-white/80 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition no-underline text-white"
              >
                en savoir plus 
                <span className="text-lg">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}