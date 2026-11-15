import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import { MDXRemote } from "next-mdx-remote";
import ImageFallback from "./components/ImageFallback";
import { FaFileAlt, FaCertificate, FaSearch, FaBook } from "react-icons/fa";
import Link from "next/link";

// Configuration des ressources (Comptes-rendus, etc.)
// Dans ton fichier Bts.js, modifie l'objet resources :
const resources = [
  { name: "diags", label: "Diagramme de Gantt", icon: <FaFileAlt className="mr-2" /> },
  { name: "certifications", label: "Certifications", icon: <FaCertificate className="mr-2" /> },
  { name: "veille", label: "Veille Techno", icon: <FaSearch className="mr-2" /> },
 
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
              <ImageFallback src={image} width={1298} height={616} alt={title} className="rounded-5xl" />
            </div>
          )}
          {markdownify(title, "h1", "display text-left text-[3rem] md:text-[5rem] mt-6 mb-10")}
        </div>

        {/* --- CONTENU MDX --- */}
        <div className="content text-left mt-8">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        {/* --- SECTION EDUCATION --- */}
        <section className="mt-12 text-left">
          <div className="surface">
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
          <div className="surface">
            <h2 className="section-title mb-10">Les examens</h2>
            <p className="mb-8 text-lg text-left">
              Le BTS SIO est constitué de 7 épreuves <span className="italic font-semibold">(E1 à E7)</span> évaluant vos compétences.
            </p>
            <div className="overflow-x-auto rounded-3xl border border-border dark:border-darkmode-border">
              <table className="w-full border-collapse border-hidden border border-border dark:border-darkmode-border">
                <thead>
                  <tr className="bg-theme-light dark:bg-darkmode-theme-dark">
                    <th className="border border-border dark:border-darkmode-border px-4 py-4 text-left font-bold text-dark dark:text-darkmode-dark">Numéro</th>
                    <th className="border border-border dark:border-darkmode-border px-4 py-4 text-left font-bold text-dark dark:text-darkmode-dark">Nom de l'épreuve</th>
                  </tr>
                </thead>
                <tbody>
                  {examens?.map((ex, i) => (
                    <tr key={i} className="hover:bg-lilac/50 dark:hover:bg-white/5 transition-colors">
                      <td className="border border-border dark:border-darkmode-border px-4 py-3 font-bold text-primary dark:text-darkmode-primary">{ex.numero}</td>
                      <td className="border border-border dark:border-darkmode-border px-4 py-3 text-left">
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
                <Link href={`/${item.name}`} className="flex w-full items-center justify-center rounded-4xl bg-lilac px-4 py-10 font-secondary text-lg font-bold text-ink transition duration-500 hover:-translate-y-1.5 hover:bg-ink hover:text-white">
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