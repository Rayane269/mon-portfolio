import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import Link from "next/link";
import { IoArrowForward, IoDocumentTextOutline } from "react-icons/io5";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const {
    title,
    image,
    status,
    cv,
    education,
    experience,
    skills,
    languages,
    soft_skills,
  } = frontmatter;

  return (
    <>
      {/* ---------- INTRO ---------- */}
      <section className="section pb-0">
        <div className="container">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div data-reveal>
              {status && <p className="eyebrow mb-6">{status}</p>}
              {markdownify(title, "h1", "display text-[3.2rem] md:text-[6rem]")}
            </div>
            {cv && (
              <div className="flex flex-wrap gap-3 lg:justify-end" data-reveal>
                <Link className="btn btn-primary" href={cv} target="_blank" rel="noopener noreferrer">
                  <IoDocumentTextOutline />
                  <span>Consulter mon CV</span>
                </Link>
                <Link className="btn btn-outline-primary" href="/contact">
                  <span>Me contacter</span>
                </Link>
              </div>
            )}
          </div>

          {image && (
            <div className="mt-12 overflow-hidden rounded-5xl" data-reveal>
              <ImageFallback
                src={image}
                width={1298}
                height={616}
                alt="Portrait de Rayane Soulaiman"
                className="w-full"
              />
            </div>
          )}

          <div className="content mx-auto mt-14 max-w-3xl" data-reveal>
            <MDXRemote {...mdxContent} components={shortcodes} />
          </div>
        </div>
      </section>

      {/* ---------- PARCOURS ---------- */}
      {education && (
        <section className="section">
          <div className="container">
            <div className="surface">
              <p className="eyebrow mb-5">Formations</p>
              {markdownify(education.title, "h2", "section-title")}
              <ol className="divide-y divide-border dark:divide-darkmode-border">
                {education.degrees.map((degree, index) => (
                  <li
                    key={"degree-" + index}
                    data-reveal
                    className="grid gap-2 py-7 md:grid-cols-[180px_1fr] md:gap-10"
                  >
                    <p className="font-secondary text-sm font-bold uppercase tracking-[0.12em] text-primary dark:text-darkmode-primary">
                      {degree.date}
                    </p>
                    <div>
                      <h3 className="flex flex-wrap items-center gap-3 font-secondary text-xl font-bold md:text-2xl">
                        {degree.title}
                        {degree.current && (
                          <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-ink">
                            En cours
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 font-semibold text-dark dark:text-darkmode-dark">
                        {degree.school}
                      </p>
                      {degree.content && <p className="mt-2 max-w-2xl">{degree.content}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* ---------- EXPERIENCES ---------- */}
      {experience && (
        <section className="section pt-0">
          <div className="container">
            <p className="eyebrow mb-5">Terrain</p>
            {markdownify(experience.title, "h2", "section-title")}
            <div className="grid gap-5 md:grid-cols-2">
              {experience.list.map((item, index) => (
                <article
                  key={"experience-" + index}
                  data-reveal
                  style={{ "--d": `${(index % 2) * 100}ms` }}
                  className={`flex flex-col rounded-4xl p-7 text-ink md:p-9 ${
                    ["bg-lilac", "bg-mint", "bg-sky", "bg-butter"][index % 4]
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                      {item.date}
                    </span>
                    <span className="text-sm font-medium text-ink/60">{item.place}</span>
                  </div>
                  <h3 className="mt-6 font-secondary text-2xl font-extrabold leading-tight !text-ink">
                    {item.role}
                  </h3>
                  <p className="mt-1 font-secondary font-bold text-ink/70">{item.company}</p>
                  <ul className="mt-5 space-y-2.5">
                    {item.missions?.map((mission, i) => (
                      <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink/80">
                        <IoArrowForward className="mt-1 shrink-0" />
                        {mission}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- COMPETENCES ---------- */}
      {skills && (
        <section className="section pt-0">
          <div className="container">
            <p className="eyebrow mb-5">Boîte à outils</p>
            <h2 className="section-title">{skills.title}</h2>
            <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
              <div className="surface grid gap-8 sm:grid-cols-2">
                {skills.categories.map((category, index) => (
                  <div key={"skill-category-" + index} data-reveal>
                    <h3 className="mb-3 font-secondary text-sm font-bold uppercase tracking-[0.12em] text-primary dark:text-darkmode-primary">
                      {category.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, i) => (
                        <span
                          key={"skill-" + i}
                          className="rounded-full border border-dark/15 bg-white/70 px-4 py-2 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:bg-ink hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-darkmode-dark"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid gap-5">
                {languages && (
                  <div className="surface" data-reveal>
                    <h3 className="mb-5 font-secondary text-2xl font-extrabold">Langues</h3>
                    <ul className="divide-y divide-border dark:divide-darkmode-border">
                      {languages.map((lang) => (
                        <li key={lang.name} className="flex items-center justify-between gap-4 py-3">
                          <span className="font-semibold text-dark dark:text-darkmode-dark">{lang.name}</span>
                          <span className="text-right text-sm">{lang.level}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {soft_skills && (
                  <div className="rounded-4xl bg-ink p-6 text-white md:p-10" data-reveal>
                    <h3 className="mb-5 font-secondary text-2xl font-extrabold !text-white">Savoir-être</h3>
                    <ul className="space-y-3">
                      {soft_skills.map((s) => (
                        <li key={s} className="flex items-center gap-3 text-white/85">
                          <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {cv && (
              <div className="mt-16 flex justify-center">
                <Link className="btn btn-primary" href={cv} target="_blank" rel="noopener noreferrer">
                  <IoDocumentTextOutline />
                  <span>Télécharger mon CV</span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default About;
