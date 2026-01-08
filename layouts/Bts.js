import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import ImageFallback from "./components/ImageFallback";
import { FaFileAlt, FaCertificate, FaSearch, FaBook } from "react-icons/fa";
import Link from "next/link";

// Configuration des ressources (Comptes-rendus, etc.)
const resources = [
  { name: "comptes-rendus", label: "Mes Comptes-rendus", icon: <FaFileAlt className="mr-2" /> },
  { name: "certifications", label: "Mes Certifications", icon: <FaCertificate className="mr-2" /> },
  { name: "notes-de-synthese", label: "Mes Notes de synthèse", icon: <FaBook className="mr-2" /> },
  { name: "veille-technologique", label: "Ma Veille technologique", icon: <FaSearch className="mr-2" /> },
];

const Bts = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, examens } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        
        {/* --- HEADER --- */}
        <div className="text-center">
          {image && (
            <div className="mb-8">
              <ImageFallback src={image} width={1298} height={616} alt={title} className="rounded-lg shadow" />
            </div>
          )}
          {markdownify(title, "h1", "h1 text-left lg:text-[55px] mt-12")}
        </div>

        {/* --- CONTENU MDX --- */}
        <div className="content text-left mt-8">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        {/* --- SECTION EDUCATION --- */}
        <section className="mt-12 text-left">
          <div className="rounded border border-border p-6 dark:border-darkmode-border">
            {education?.title && markdownify(education.title, "h2", "section-title mb-10")}
            <div className="row">
              {education?.degrees?.map((degree, index) => (
                <div className="mb-7 md:col-6" key={index}>
                  <h4 className="text-xl text-dark dark:text-darkmode-light mb-3">{degree.university}</h4>
                  <div className="text-dark dark:text-darkmode-light whitespace-pre-line leading-relaxed">
                    {degree.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- SECTION EXAMENS --- */}
        <section className="mt-16">
          <div className="rounded-lg shadow-lg p-8 md:p-12 border border-border dark:border-darkmode-border">
            <h2 className="text-4xl section-title mb-10">Les examens</h2>
            <p className="mb-8 text-lg text-left">
              Le BTS SIO est constitué de 7 épreuves <span className="italic font-semibold">(E1 à E7)</span> évaluant vos compétences.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-primary">
                <thead>
                  <tr className="bg-amber-50 dark:bg-teal-900/20">
                    <th className="border border-primary px-4 py-4 text-left font-bold dark:text-amber-300">Numéro</th>
                    <th className="border border-primary px-4 py-4 text-left font-bold dark:text-amber-300">Nom de l'épreuve</th>
                  </tr>
                </thead>
                <tbody>
                  {examens?.map((ex, i) => (
                    <tr key={i} className="hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-colors">
                      <td className="border border-primary px-4 py-3 font-bold text-teal-700 dark:text-white">{ex.numero}</td>
                      <td className="border border-primary px-4 py-3 text-left">
                        {ex.nom} {ex.italic && <span className="italic text-gray-500 text-sm">(Spécifique à l'option)</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* --- SECTION RESSOURCES (Dossiers) --- */}
        <section className="pt-16">
          <ul className="row justify-center">
            {resources.map((item, i) => (
              <li key={i} className="mt-4 block lg:col-4 xl:col-3">
                <Link href={`/${item.name}`} className="flex w-full items-center justify-center rounded-lg bg-theme-light px-4 py-8 font-bold text-dark transition hover:bg-primary hover:text-white dark:bg-darkmode-theme-dark dark:text-darkmode-light dark:hover:bg-primary dark:hover:text-white shadow-sm">
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </section>
  );
};

export default Bts;