import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { IoArrowUp, IoArrowForward } from "react-icons/io5";

const Footer = () => {
  const { copyright, footer_content } = config.params;

  return (
    <footer className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-5xl bg-ink px-6 pb-8 pt-16 text-white/70 md:px-12 md:pt-24">
        {/* glow */}
        <div className="blob -right-32 -top-32 h-96 w-96 bg-primary/50" />
        <div className="blob -bottom-40 left-10 h-80 w-80 bg-accent/20" />

        <div className="container relative !px-0">
          {/* big CTA */}
          <div className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div data-reveal>
              <p className="eyebrow mb-6 border-white/20 !text-white/80">
                Une question, un projet ?
              </p>
              <Link
                href="/contact"
                className="group block font-secondary text-[3.2rem] font-extrabold leading-[0.95] tracking-[-0.045em] text-white sm:text-[4.5rem] lg:text-[6rem]"
                data-cursor="Écrire"
              >
                Parlons
                <br />
                <span className="inline-flex items-center gap-4">
                  <span className="bg-gradient-to-r from-primary to-[#B7A9FF] bg-clip-text text-transparent">
                    ensemble
                  </span>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-ink transition-transform duration-500 group-hover:-rotate-45 group-hover:bg-accent lg:h-20 lg:w-20 lg:text-4xl">
                    <IoArrowForward />
                  </span>
                </span>
              </Link>
            </div>
            <div data-reveal style={{ "--d": "120ms" }}>
              {markdownify(footer_content, "p", "max-w-md text-lg leading-relaxed text-white/70")}
              <div className="mt-6 [&_.socials_a]:border [&_.socials_a]:border-white/20 [&_.socials_a]:text-white [&_.socials_a:hover]:bg-white [&_.socials_a:hover]:text-ink">
                <Social source={social} className="socials !gap-2" />
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="flex flex-col gap-8 pt-10 md:flex-row md:items-center md:justify-between">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {menu.footer.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.url}
                    className="font-secondary text-sm font-semibold text-white/80 transition hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-6">
              {markdownify(copyright, "p", "text-xs text-white/50")}
              <a
                href="#main"
                aria-label="Revenir en haut"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition hover:-translate-y-1 hover:bg-white hover:text-ink"
              >
                <IoArrowUp />
              </a>
            </div>
          </div>

          {/* giant wordmark */}
          <p
            aria-hidden="true"
            className="pointer-events-none mt-12 select-none whitespace-nowrap text-center font-secondary text-[17vw] font-extrabold leading-[0.8] tracking-[-0.06em] text-white/[.06] lg:text-[13.5rem]"
          >
            soulaiman
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
