import Base from "@layouts/Baseof";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

export default function VeilleTechnologique() {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  const data = {
    frontmatter: {
      title: "Veille Technologique",
      description: "Infrastructures en milieux hostiles : Abysses et Espace.",
    }
  };

  // On regroupe toutes tes sources ici
  const allArticles = [
    {
      title: "Data Centers Spatiaux : Vos données en orbite d'ici 2050 ?",
      image: "/images/veille/space-data.png",
      link: "https://www.futura-sciences.com/sciences/actualites/utilisation-espace-data-centers-spatiaux-vos-donnees-orbite-ici-2050-114348/",
      tag: "ESPACE"
    },
    {
      title: "Microsoft Natick : Le succès du Cloud sous-marin",
      image: "/images/veille/virtual-product.jpg",
      link: "https://news.microsoft.com/fr-fr/features/microsoft-teste-un-datacenter-sous-marin-rapide-a-deployer-qui-pourrait-fournir-une-connectivite-internet-pendant-des-annees/",
      tag: "ABYSSES"
    },
    {
      title: "Le Japon lance un projet inédit de datacenter flottant",
      image: "/images/veille/floating-data.jpg.webp",
      link: "https://dcmag.fr/le-japon-lance-un-projet-inedit-de-datacenter-flottant-alimente-par-energie-renouvelable/",
      tag: "ÉNERGIE"
    },
    {
      title: "La Chine déploie ses premiers centres de données orbitaux",
      image: "/images/veille/china-data.png",
      link: "https://www.usinenouvelle.com/article/des-datacenters-dans-l-espace-cette-entreprise-chinoise-a-deja-commence-a-en-deployer.N2233626",
      tag: "CHINE"
    },
    {
      title: "Datacenters orbitaux : Entre défi technique et nécessité écologique",
      image: "/images/veille/eco-space.jpg",
      link: "https://www.techniques-ingenieur.fr/actualite/articles/des-datacenters-dans-lespace-entre-defi-technologique-et-necessite-ecologique-155723/",
      tag: "ÉCOLOGIE"
    },
    {
      title: "Bientôt un data center flottant dans le Grand port maritime de Marseille ?",
      image: "/images/veille/marseille.jpeg.webp",
      link: "https://madeinmarseille.net/actualite/marseille/130520-data-center-flottant-grand-port-maritime-de-marseille/",
      tag: "FRANCE"
    },
    
    {
      title: "Envoyer des data centers en orbite : révolution ou mirage intersidéral ?",
      image: "/images/veille/mirage.jpeg",
      link: "https://usbeketrica.com/fr/article/envoyer-des-data-centers-en-orbite-revolution-ou-mirage-intersideral-espace",
      tag: "ESPACE"
    },
    {
      title: "La guerre en Iran accroît l'intérêt pour les centres de données dans d'anciens bunkers",
      image: "/images/veille/iran.png",
      link: "https://www.rts.ch/info/suisse/2026/article/la-guerre-en-iran-accroit-l-interet-pour-les-centres-de-donnees-dans-d-anciens-bunkers-29224433.html",
      tag: "IRAN"
    }
  ];

  // Logique de pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  return (
    <Base title={data.frontmatter.title} data={data}>
      <article className="section pt-10">
        <div className="container max-w-[1000px]">
          <header className="mb-12 text-center">
            <h1 className="h1 text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
              Infrastructures <span className="text-primary">Extrêmes</span>
            </h1>
            <p className="text-xl font-medium opacity-80 mb-10">
             Ma veille technologique sur le futur des Data Centers.
            </p>

            {/* --- Section Explication Longue --- */}
            <div className="max-w-4xl mx-auto text-left bg-white dark:bg-black p-8 md:p-10 rounded-2xl border border-border shadow-lg relative overflow-hidden">
              {/* Petit badge décoratif */}
              <div className="absolute top-0 right-0 bg-primary text-white text-[10px] px-4 py-1 font-bold uppercase tracking-widest">
                Synthèse de Veille
              </div>

              <div className="space-y-6 text-base md:text-lg leading-relaxed text-dark dark:text-light">
                <p>
                  Dans le cadre de mon parcours en <strong>SISR (Solutions d'Infrastructure, Systèmes et Réseaux)</strong>, ma veille technologique s'articule autour d'une mutation profonde du secteur :
                  <strong> l'évasion des infrastructures hors des limites terrestres conventionnelles.</strong>
                  Alors que la densité numérique mondiale explose, les centres de données traditionnels se heurtent à trois murs :
                  le foncier, l'énergie et le refroidissement.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mt-8 ">
                  <div>
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      Axe 1 : L'immersion Subaquatique
                    </h3>
                    <p className="text-sm opacity-80 ">
                      L'exploitation de la capacité thermique des océans permet de réduire drastiquement le <strong>PUE (Power Usage Effectiveness)</strong>.
                      Le projet Natick de Microsoft a prouvé qu'un environnement sous pression d'azote réduit la corrosion des composants,
                      multipliant la fiabilité par huit par rapport à la terre ferme.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                      Axe 2 : Le Cloud Orbital
                    </h3>
                    <p className="text-sm opacity-80">
                      L'informatique spatiale n'est plus de la science-fiction. En plaçant des serveurs en orbite basse (LEO),
                      on s'affranchit des risques géopolitiques terrestres et on optimise le refroidissement grâce au vide spatial.
                      C'est l'étape ultime de la <strong>Souveraineté Numérique</strong>.
                    </p>
                  </div>
                </div>

                <p className="border-t border-border pt-6 font-medium italic">
                  "Ma démarche souligne que pour le futur administrateur réseau, la gestion de l'infrastructure ne s'arrêtera plus aux murs du data center,
                  mais s'étendra à des environnements hybrides et décentralisés où la résilience physique est aussi cruciale que la sécurité logique."
                </p>
              </div>
            </div>
          </header>
          <div className=" pt-2">
            <div className="flex items-center mb-10">
              <h2 className="bg-dark text-white px-4 py-1 text-sm font-bold uppercase italic">
                Dernières Analyses
              </h2>
            </div>

            {/* Grille des articles calculée dynamiquement */}
            <div className="grid md:grid-cols-2 gap-8 min-h-[500px]">
              {currentArticles.map((article, index) => (
                <Link key={index} href={article.link} target="_blank" className="group relative block overflow-hidden rounded-xl shadow-lg aspect-video">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 p-6">
                    <span className="bg-primary text-white text-[10px] px-2 py-1 rounded mb-2 inline-block font-bold">{article.tag}</span>
                    <h3 className="text-white font-bold text-lg leading-tight">{article.title}</h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION RÉELLE */}
            {/* --- PAGINATION (Adaptée de ton composant original) --- */}
            {totalPages > 1 && (
              <nav
                className="mt-16 flex items-center justify-center space-x-2 lg:space-x-4"
                aria-label="Pagination"
              >
                {/* Bouton Précédent */}
                <button
                  onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none transition ${currentPage > 1
                      ? "text-dark dark:text-darkmode-light hover:text-primary"
                      : "opacity-30 cursor-not-allowed text-dark dark:text-darkmode-light"
                    }`}
                >
                  <BsArrowLeftShort />
                  <span className="ml-2 text-lg hidden md:inline">Précédent</span>
                </button>

                {/* Liste des numéros de pages */}
                {[...Array(totalPages)].map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`inline-flex h-[42px] w-[42px] items-center justify-center rounded-full font-secondary text-lg font-bold leading-none transition ${currentPage === pageNumber
                          ? "bg-primary text-white"
                          : "text-dark dark:text-darkmode-light hover:bg-gray-100 dark:hover:bg-darkmode-theme-light"
                        }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                {/* Bouton Suivant */}
                <button
                  onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none transition ${currentPage < totalPages
                      ? "text-dark dark:text-darkmode-light hover:text-primary"
                      : "opacity-30 cursor-not-allowed text-dark dark:text-darkmode-light"
                    }`}
                >
                  <span className="mr-2 text-lg hidden md:inline">Suivant</span>
                  <BsArrowRightShort />
                </button>
              </nav>
            )}
          </div>
        </div>
      </article>
    </Base>
  );
}