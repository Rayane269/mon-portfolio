import Base from "@layouts/Baseof";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  IoArrowForward,
  IoBusinessOutline,
  IoFlashOutline,
  IoSnowOutline,
} from "react-icons/io5";

const data = {
  frontmatter: {
    title: "Veille Technologique",
    description: "Infrastructures en milieux hostiles : Abysses et Espace.",
  },
};

// Sources de la veille
const allArticles = [
  {
    title: "Data Centers Spatiaux : Vos données en orbite d'ici 2050 ?",
    image: "/images/veille/space-data.png",
    link: "https://www.futura-sciences.com/sciences/actualites/utilisation-espace-data-centers-spatiaux-vos-donnees-orbite-ici-2050-114348/",
    tag: "ESPACE",
  },
  {
    title: "Microsoft Natick : Le succès du Cloud sous-marin",
    image: "/images/veille/virtual-product.jpg",
    link: "https://news.microsoft.com/fr-fr/features/microsoft-teste-un-datacenter-sous-marin-rapide-a-deployer-qui-pourrait-fournir-une-connectivite-internet-pendant-des-annees/",
    tag: "ABYSSES",
  },
  {
    title: "Le Japon lance un projet inédit de datacenter flottant",
    image: "/images/veille/floating-data.jpg.webp",
    link: "https://dcmag.fr/le-japon-lance-un-projet-inedit-de-datacenter-flottant-alimente-par-energie-renouvelable/",
    tag: "ÉNERGIE",
  },
  {
    title: "La Chine déploie ses premiers centres de données orbitaux",
    image: "/images/veille/china-data.png",
    link: "https://www.usinenouvelle.com/article/des-datacenters-dans-l-espace-cette-entreprise-chinoise-a-deja-commence-a-en-deployer.N2233626",
    tag: "CHINE",
  },
  {
    title: "Datacenters orbitaux : Entre défi technique et nécessité écologique",
    image: "/images/veille/eco-space.jpg",
    link: "https://www.techniques-ingenieur.fr/actualite/articles/des-datacenters-dans-lespace-entre-defi-technologique-et-necessite-ecologique-155723/",
    tag: "ÉCOLOGIE",
  },
  {
    title: "Bientôt un data center flottant dans le Grand port maritime de Marseille ?",
    image: "/images/veille/marseille.jpeg.webp",
    link: "https://madeinmarseille.net/actualite/marseille/130520-data-center-flottant-grand-port-maritime-de-marseille/",
    tag: "FRANCE",
  },
  {
    title: "Envoyer des data centers en orbite : révolution ou mirage intersidéral ?",
    image: "/images/veille/mirage.jpeg",
    link: "https://usbeketrica.com/fr/article/envoyer-des-data-centers-en-orbite-revolution-ou-mirage-intersideral-espace",
    tag: "ESPACE",
  },
  {
    title: "La guerre en Iran accroît l'intérêt pour les centres de données dans d'anciens bunkers",
    image: "/images/veille/iran.png",
    link: "https://www.rts.ch/info/suisse/2026/article/la-guerre-en-iran-accroit-l-interet-pour-les-centres-de-donnees-dans-d-anciens-bunkers-29224433.html",
    tag: "IRAN",
  },
];

// les trois limites des data centers terrestres
const walls = [
  { icon: <IoBusinessOutline />, label: "Le foncier" },
  { icon: <IoFlashOutline />, label: "L'énergie" },
  { icon: <IoSnowOutline />, label: "Le refroidissement" },
];

// champ d'étoiles déterministe (identique côté serveur et client)
const stars = Array.from({ length: 70 }, (_, i) => ({
  x: (i * 37.7) % 100,
  y: (i * 61.3) % 100,
  s: (i % 3) + 1,
  o: 0.25 + ((i * 13) % 60) / 100,
}));

const sourceOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
};

export default function VeilleTechnologique() {
  const [filter, setFilter] = useState("TOUS");

  const tags = useMemo(() => {
    const counts = {};
    allArticles.forEach((a) => (counts[a.tag] = (counts[a.tag] || 0) + 1));
    return [["TOUS", allArticles.length], ...Object.entries(counts)];
  }, []);

  const articles =
    filter === "TOUS" ? allArticles : allArticles.filter((a) => a.tag === filter);

  return (
    <Base title={data.frontmatter.title} description={data.frontmatter.description}>
      {/* ---------- HERO ---------- */}
      <section className="px-3 pt-6 sm:px-5">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-5xl bg-[#07081A] px-6 pb-14 pt-16 text-white md:px-14 md:pb-20 md:pt-24">
          {/* stars */}
          <div aria-hidden="true" className="absolute inset-0">
            {stars.map((st, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${st.x}%`,
                  top: `${st.y}%`,
                  width: st.s,
                  height: st.s,
                  opacity: st.o,
                }}
              />
            ))}
          </div>
          {/* glow + planet */}
          <div className="blob -bottom-40 -left-20 h-[30rem] w-[30rem] bg-[#1E6FD9]/40" />
          <div className="blob -right-24 -top-24 h-96 w-96 bg-primary/50" />
          <div
            aria-hidden="true"
            className="absolute -right-24 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 lg:block"
          >
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#6C5CFF] via-[#2B2F8F] to-[#07081A] shadow-[inset_-40px_-30px_80px_rgba(0,0,0,.6)]" />
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/15">
              <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_4px_rgba(247,178,6,.6)]" />
            </div>
            <div className="absolute -inset-10 rotate-[25deg] animate-[spin-slow_30s_linear_infinite_reverse] rounded-full border border-dashed border-white/10" />
          </div>

          <div className="relative max-w-3xl">
            <p className="eyebrow mb-8 border-white/20 !text-white/80">
              Veille technologique · {allArticles.length} sources
            </p>
            <h1 className="display text-[clamp(2.4rem,9.5vw,7.5rem)] !text-white">
              Infrastructures
              <br />
              <span className="bg-gradient-to-r from-[#8B7BFF] via-[#5EC8FF] to-accent bg-clip-text text-transparent">
                extrêmes.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/70 md:text-xl">
              Ma veille sur le futur des data centers : quand l&apos;infrastructure quitte la terre
              ferme pour les abysses et l&apos;orbite.
            </p>

            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
                Trois murs pour les data centers terrestres
              </p>
              <ul className="flex flex-wrap gap-3">
                {walls.map((w) => (
                  <li
                    key={w.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-secondary text-sm font-semibold backdrop-blur"
                  >
                    <span className="text-lg text-accent">{w.icon}</span>
                    {w.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- LE CONSTAT ---------- */}
      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div data-reveal>
              <p className="eyebrow">Le constat</p>
            </div>
            <p
              data-reveal
              className="font-secondary text-2xl font-semibold leading-snug tracking-tight text-dark dark:text-darkmode-dark md:text-[2.1rem]"
            >
              Dans le cadre de mon parcours en SISR, ma veille s&apos;articule autour d&apos;une
              mutation profonde du secteur :{" "}
              <span className="text-primary dark:text-darkmode-primary">
                l&apos;évasion des infrastructures hors des limites terrestres conventionnelles.
              </span>{" "}
              <span className="text-text dark:text-darkmode-text">
                Alors que la densité numérique mondiale explose, les centres de données
                traditionnels se heurtent à trois murs : le foncier, l&apos;énergie et le
                refroidissement.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ---------- LES DEUX AXES ---------- */}
      <section className="section pt-0">
        <div className="container">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Axe 1 */}
            <article
              data-reveal
              className="relative flex min-h-[520px] flex-col overflow-hidden rounded-5xl bg-gradient-to-b from-[#0F5C8C] via-[#0A3B63] to-[#04172B] p-8 text-white md:p-12"
            >
              {/* bulles */}
              <div aria-hidden="true" className="absolute inset-0">
                {[12, 28, 46, 63, 81, 90].map((x, i) => (
                  <span
                    key={x}
                    className="absolute animate-float rounded-full border border-white/30"
                    style={{
                      left: `${x}%`,
                      top: `${20 + ((i * 23) % 50)}%`,
                      width: 8 + (i % 3) * 8,
                      height: 8 + (i % 3) * 8,
                      animationDelay: `${i * 0.7}s`,
                    }}
                  />
                ))}
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 800 120"
                preserveAspectRatio="none"
                className="absolute inset-x-0 top-0 h-16 w-full text-white/10"
              >
                <path
                  fill="currentColor"
                  d="M0 60 C 120 110, 240 10, 400 60 S 680 110, 800 60 V0 H0 Z"
                />
              </svg>

              <div className="relative flex items-center justify-between">
                <span className="font-secondary text-sm font-bold">Axe 01</span>
                <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  Abysses
                </span>
              </div>
              <h2 className="relative mt-8 font-secondary text-4xl font-extrabold leading-[1.02] tracking-tight !text-white md:text-5xl">
                L&apos;immersion subaquatique
              </h2>
              <p className="relative mt-5 max-w-md text-white/75">
                L&apos;exploitation de la capacité thermique des océans permet de réduire
                drastiquement le <strong className="text-white">PUE</strong> (Power Usage
                Effectiveness). Le projet Natick de Microsoft a prouvé qu&apos;un environnement
                sous pression d&apos;azote réduit la corrosion des composants.
              </p>
              <div className="relative mt-auto flex items-end gap-4 pt-10">
                <p className="display text-[5.5rem] !text-white md:text-[7rem]">×8</p>
                <p className="mb-4 max-w-[12rem] text-sm text-white/70">
                  de fiabilité par rapport à la terre ferme (projet Natick)
                </p>
              </div>
            </article>

            {/* Axe 2 */}
            <article
              data-reveal
              style={{ "--d": "120ms" }}
              className="relative flex min-h-[520px] flex-col overflow-hidden rounded-5xl bg-[#0B0B1F] p-8 text-white md:p-12"
            >
              <div
                aria-hidden="true"
                className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-gradient-to-br from-primary to-[#1B1550] opacity-80"
              />
              <div
                aria-hidden="true"
                className="absolute -right-44 -top-44 h-[28rem] w-[28rem] animate-spin-slow rounded-full border border-white/15"
              >
                <span className="absolute bottom-[14%] left-[14%] h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_4px_rgba(247,178,6,.55)]" />
              </div>

              <div className="relative flex items-center justify-between">
                <span className="font-secondary text-sm font-bold">Axe 02</span>
                <span className="rounded-full border border-white/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]">
                  Orbite
                </span>
              </div>
              <h2 className="relative mt-8 max-w-sm font-secondary text-4xl font-extrabold leading-[1.02] tracking-tight !text-white md:text-5xl">
                Le cloud orbital
              </h2>
              <p className="relative mt-5 max-w-md text-white/75">
                L&apos;informatique spatiale n&apos;est plus de la science-fiction. En plaçant des
                serveurs en orbite basse, on s&apos;affranchit des risques géopolitiques terrestres
                et on optimise le refroidissement grâce au vide spatial. C&apos;est l&apos;étape
                ultime de la <strong className="text-white">souveraineté numérique</strong>.
              </p>
              <div className="relative mt-auto flex items-end gap-4 pt-10">
                <p className="display text-[5.5rem] !text-white md:text-[7rem]">LEO</p>
                <p className="mb-4 max-w-[12rem] text-sm text-white/70">
                  Low Earth Orbit : l&apos;orbite basse visée par les data centers spatiaux
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- CITATION ---------- */}
      <section className="section pt-0">
        <div className="container">
          <figure
            data-reveal
            className="relative overflow-hidden rounded-5xl bg-lilac px-8 py-14 text-ink md:px-20 md:py-20"
          >
            <span
              aria-hidden="true"
              className="absolute -top-10 left-6 font-secondary text-[14rem] font-extrabold leading-none text-primary/20"
            >
              “
            </span>
            <blockquote className="relative font-secondary text-2xl font-semibold leading-snug tracking-tight md:text-[2.2rem]">
              Pour le futur administrateur réseau, la gestion de l&apos;infrastructure ne
              s&apos;arrêtera plus aux murs du data center, mais s&apos;étendra à des environnements
              hybrides et décentralisés où{" "}
              <span className="text-primary">
                la résilience physique est aussi cruciale que la sécurité logique.
              </span>
            </blockquote>
            <figcaption className="relative mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">
              Synthèse de ma démarche de veille
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- SOURCES ---------- */}
      <section className="section pt-0">
        <div className="container">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div data-reveal>
              <p className="eyebrow mb-5">Sources</p>
              <h2 className="section-title !mb-0">Dernières analyses</h2>
            </div>
          </div>

          {/* filtres */}
          <div
            role="group"
            aria-label="Filtrer les sources par thème"
            className="mb-10 flex flex-wrap gap-2"
          >
            {tags.map(([tag, count]) => {
              const active = filter === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(tag)}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-ink bg-ink text-white dark:border-darkmode-dark dark:bg-darkmode-dark dark:text-ink"
                      : "border-dark/15 text-dark hover:border-dark/40 dark:border-white/15 dark:text-darkmode-dark dark:hover:border-white/40"
                  }`}
                >
                  {tag === "TOUS" ? "Tous" : tag.charAt(0) + tag.slice(1).toLowerCase()}
                  <span
                    className={`rounded-full px-1.5 text-[11px] ${
                      active ? "bg-white/20" : "bg-dark/10 dark:bg-white/10"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div key={filter} className="grid gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="Lire"
                className="group block animate-word-in"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-theme-light dark:bg-darkmode-theme-dark">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                    {article.tag.charAt(0) + article.tag.slice(1).toLowerCase()}
                  </span>
                </div>
                <div className="mt-5 flex items-start gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.12em] text-light dark:text-darkmode-text">
                      {sourceOf(article.link)}
                    </p>
                    <h3 className="font-secondary text-xl font-bold leading-snug tracking-tight">
                      <span className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]">
                        {article.title}
                      </span>
                    </h3>
                  </div>
                  <span className="btn-circle mt-1 h-10 w-10">
                    <IoArrowForward />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Base>
  );
}
