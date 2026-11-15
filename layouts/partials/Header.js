import menu from "@config/menu.json";
import socical from "@config/social.json";
import Social from "@layouts/components/Social";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import SearchModal from "@partials/SearchModal";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const isActive = (router, url) =>
  url === "/" ? router.asPath === "/" : router.asPath.startsWith(url);

const Header = () => {
  const { main } = menu;

  const [searchModal, setSearchModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // bloque le scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.classList.toggle("menu-open", showMenu);
  }, [showMenu]);

  // ferme le menu à chaque changement de page
  useEffect(() => {
    setShowMenu(false);
  }, [router.asPath]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="navbar z-50" aria-label="Navigation principale">
        <Link href="/" className="wordmark" aria-label="Accueil">
          <span className="wordmark-dot" />
          Rayane<span className="hidden font-medium opacity-50 sm:inline">.soulaiman</span>
        </Link>

        {/* desktop links */}
        <ul className="navbar-nav hidden lg:flex">
          {main.map((item, i) => (
            <li className="nav-item" key={`menu-${i}`}>
              <Link
                href={item.url}
                className={`nav-link ${isActive(router, item.url) ? "active" : ""}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <ThemeSwitcher />
          <button
            type="button"
            aria-label="Rechercher"
            className="search-icon"
            onClick={() => setSearchModal(true)}
          >
            <IoSearch />
          </button>
          <button
            type="button"
            onClick={() => setShowMenu(!showMenu)}
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
            aria-label={showMenu ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative ml-1 inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 font-secondary text-sm font-semibold text-white dark:bg-darkmode-dark dark:text-ink lg:hidden"
          >
            <span>{showMenu ? "Fermer" : "Menu"}</span>
            <span className="relative block h-2.5 w-4">
              <span
                className={`absolute left-0 h-[2px] w-4 rounded bg-current transition-all duration-300 ${
                  showMenu ? "top-1 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] w-4 rounded bg-current transition-all duration-300 ${
                  showMenu ? "top-1 -rotate-45" : "top-2"
                }`}
              />
            </span>
          </button>
        </div>

        <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
      </nav>

      {/* mobile full-screen menu */}
      <div
        id="mobile-menu"
        className={`collapse-menu lg:hidden ${
          showMenu
            ? "[clip-path:circle(150%_at_calc(100%-3rem)_2.5rem)]"
            : "pointer-events-none [clip-path:circle(0%_at_calc(100%-3rem)_2.5rem)]"
        }`}
      >
        <ul className="navbar-nav">
          {main.map((item, i) => (
            <li
              className="nav-item overflow-hidden"
              key={`m-menu-${i}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <Link
                href={item.url}
                tabIndex={showMenu ? 0 : -1}
                className={`nav-link !flex items-baseline transition-transform duration-700 ${
                  showMenu ? "translate-y-0" : "translate-y-full"
                } ${isActive(router, item.url) ? "active" : ""}`}
                style={{ transitionDelay: `${150 + i * 60}ms` }}
              >
                <span className="mr-3 shrink-0 font-primary text-xs font-medium text-white/40">
                  0{i + 1}
                </span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-t border-white/15 pt-6 [&_.socials_a]:text-white [&_.socials_a:hover]:bg-white [&_.socials_a:hover]:text-ink">
          <Social source={socical} className="socials" />
        </div>
      </div>
    </header>
  );
};

export default Header;
