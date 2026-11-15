import config from "@config/config.json";
import Base from "@layouts/Baseof";
import DisciplineCards from "@layouts/components/DisciplineCards";
import ImageFallback from "@layouts/components/ImageFallback";
import Post from "@layouts/partials/Post";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { getTaxonomy } from "@lib/taxonomyParser";
import { sortByDate } from "@lib/utils/sortFunctions";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoArrowDown, IoArrowForward } from "react-icons/io5";
const { blog_folder, pagination } = config.settings;

// mots qui défilent dans le hero
const roles = ["les systèmes", "les réseaux", "la sécurité", "la supervision"];

// technologies affichées dans le bandeau défilant
const stack = [
  "Windows Server 2025",
  "Active Directory",
  "pfSense",
  "Cisco",
  "Zabbix",
  "GLPI",
  "Proxmox",
  "Unbound DNS",
  "Nextcloud",
  "Wireshark",
  "Scapy",
  "Linux",
  "VPN",
  "LDAPS",
];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <span key={i} className="inline-block animate-word-in text-primary">
        {roles[i]}
      </span>
    </span>
  );
};

const SectionHead = ({ eyebrow, title, link, linkLabel }) => (
  <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
    <div data-reveal>
      <p className="eyebrow mb-5">{eyebrow}</p>
      {markdownify(title, "h2", "section-title !mb-0 max-w-3xl")}
    </div>
    {link && (
      <Link href={link} className="btn btn-outline-primary w-fit" data-reveal>
        <span>{linkLabel}</span>
        <IoArrowForward />
      </Link>
    )}
  </div>
);

const Home = ({ banner, posts, featured_posts, recent_posts, categories }) => {
  const sortPostByDate = sortByDate(posts);
  const showPosts = pagination;
  const [first, ...rest] = (banner.title_small || "").split(" ");

  return (
    <Base>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden pb-10 pt-12 md:pt-20">
        <div className="blob -left-40 top-10 h-[28rem] w-[28rem] bg-lilac dark:bg-primary/20" />
        <div className="blob -right-20 bottom-0 h-80 w-80 bg-butter dark:bg-accent/10" />

        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p
                className="eyebrow mb-8 animate-word-in"
                style={{ animationDelay: "100ms" }}
              >
                BTS SIO · option SISR
              </p>

              {markdownify(
                banner.title,
                "p",
                "mb-3 font-secondary text-2xl font-semibold text-dark dark:text-darkmode-dark md:text-3xl animate-word-in [animation-delay:200ms]"
              )}

              <h1 className="display text-[clamp(3.6rem,11vw,9.5rem)]">
                <span className="block overflow-hidden pb-2">
                  <span className="block animate-word-in [animation-delay:300ms]">
                    {first}
                  </span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <span className="block animate-word-in capitalize [animation-delay:420ms]">
                    {rest.join(" ").toLowerCase()}
                    <span className="text-primary">.</span>
                  </span>
                </span>
              </h1>

              <p className="mt-8 font-secondary text-2xl font-semibold leading-snug text-dark dark:text-darkmode-dark md:text-[2rem]">
                J&apos;administre <RotatingWord />
              </p>

              {markdownify(
                banner.content,
                "p",
                "mt-4 max-w-xl text-lg text-text dark:text-darkmode-text"
              )}

              <div className="mt-10 flex flex-wrap items-center gap-3">
                {banner.button.enable && (
                  <Link
                    className="btn btn-primary"
                    href={banner.button.link}
                    rel={banner.button.rel}
                  >
                    <span>{banner.button.label}</span>
                    <IoArrowForward />
                  </Link>
                )}
                <Link className="btn btn-outline-primary" href={`/${blog_folder}`}>
                  <span>Voir mes projets</span>
                </Link>
              </div>
            </div>

            {/* portrait card */}
            {banner.image_enable && (
              <div className="relative mx-auto w-full max-w-[520px]">
                <div className="relative aspect-square overflow-hidden rounded-5xl bg-gradient-to-br from-lilac via-[#EDE9FF] to-sky dark:from-[#26214A] dark:via-[#1C1A2E] dark:to-[#152536]">
                  <div className="absolute inset-x-0 bottom-0 top-0 flex items-end">
                    <ImageFallback
                      className="h-auto w-full object-contain object-bottom"
                      src={banner.image}
                      width={548}
                      height={443}
                      alt="Portrait de Rayane Soulaiman"
                      priority={true}
                    />
                  </div>
                </div>

                {/* rotating badge */}
                <div className="absolute -left-6 top-10 hidden h-32 w-32 items-center justify-center rounded-full bg-ink text-white shadow-xl sm:flex">
                  <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
                    <defs>
                      <path id="circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-white font-secondary text-[10.5px] font-semibold uppercase tracking-[0.2em]">
                      <textPath href="#circle">Systèmes • Réseaux • Sécurité •</textPath>
                    </text>
                  </svg>
                  <IoArrowDown className="text-2xl" />
                </div>

                {/* floating chips */}
                <span
                  className="absolute -right-3 top-[22%] animate-float rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg dark:bg-darkmode-theme-dark dark:text-darkmode-dark"
                  style={{ "--r": "6deg" }}
                >
                  🛡️ Cybersécurité
                </span>
                <span
                  className="absolute -left-4 bottom-[18%] animate-float rounded-full bg-accent px-4 py-2 text-sm font-semibold text-ink shadow-lg [animation-delay:1.5s]"
                  style={{ "--r": "-5deg" }}
                >
                  🖧 Réseaux & Cisco
                </span>
                <span
                  className="absolute -right-2 bottom-8 animate-float rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-lg [animation-delay:3s] dark:bg-white dark:text-ink"
                  style={{ "--r": "3deg" }}
                >
                  ⚙️ Windows Server
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <section aria-label="Technologies" className="relative z-[1] my-10 -rotate-[1.5deg] bg-ink py-5 text-white dark:bg-white dark:text-ink">
        <div className="overflow-hidden">
          <div className="marquee">
            {[0, 1].map((k) => (
              <ul key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center whitespace-nowrap px-6 font-secondary text-2xl font-bold tracking-tight md:text-4xl"
                  >
                    {tech}
                    <span className="ml-12 text-accent">✦</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="section pb-0">
        <div className="container">
          <div className="grid gap-px overflow-hidden rounded-4xl border border-border bg-border dark:border-darkmode-border dark:bg-darkmode-border sm:grid-cols-3">
            {[
              { n: String(posts.length).padStart(2, "0"), l: "projets techniques documentés" },
              { n: String(categories.length).padStart(2, "0"), l: "domaines : systèmes, réseaux, sécurité…" },
              { n: "PT1", l: "certification Junior Penetration Tester" },
            ].map((s, i) => (
              <div
                key={i}
                data-reveal
                style={{ "--d": `${i * 100}ms` }}
                className="bg-body p-8 dark:bg-darkmode-body md:p-10"
              >
                <p className="display text-6xl md:text-7xl">{s.n}</p>
                <p className="mt-3 max-w-[16rem] text-[15px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DOSSIER NUMERIQUE ---------- */}
      {featured_posts.enable && (
        <section className="section">
          <div className="container">
            <SectionHead eyebrow="Dossier numérique" title={featured_posts.title} />
            <DisciplineCards />
          </div>
        </section>
      )}

      {/* ---------- PROJETS ---------- */}
      {recent_posts.enable && (
        <section className="section pt-0">
          <div className="container">
            <SectionHead
              eyebrow="Projets récents"
              title={recent_posts.title}
              link={`/${blog_folder}`}
              linkLabel={`Tous les projets (${posts.length})`}
            />
            <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
              {sortPostByDate.slice(0, showPosts).map((post, i) => (
                <div
                  key={post.slug}
                  data-reveal
                  style={{ "--d": `${(i % 2) * 120}ms` }}
                  className={i % 2 === 1 ? "md:mt-24" : ""}
                >
                  <Post post={post} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  const { banner, featured_posts, recent_posts, promotion } = frontmatter;
  const posts = getSinglePage(`content/${blog_folder}`);
  const categories = getTaxonomy(`content/${blog_folder}`, "categories");

  const categoriesWithPostsCount = categories.map((category) => {
    const filteredPosts = posts.filter((post) =>
      post.frontmatter.categories.includes(category)
    );
    return {
      name: category,
      posts: filteredPosts.length,
    };
  });

  return {
    props: {
      banner: banner,
      posts: posts,
      featured_posts,
      recent_posts,
      promotion,
      categories: categoriesWithPostsCount,
    },
  };
};
