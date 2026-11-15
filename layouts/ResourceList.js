import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import ImageFallback from "./components/ImageFallback";

const ResourceList = ({ data }) => {
  const { frontmatter, resources } = data; // 'resources' sera la liste des fichiers .md filtrés
  const { title, description } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {/* En-tête de la page */}
        <div className="text-center mb-12">
          {markdownify(title, "h1", "h1 mb-4")}
          {description && <p className="text-lg">{description}</p>}
        </div>

        {/* Grille des ressources */}
        <div className="row">
          {resources.map((resource, i) => (
            <div key={i} className="mb-8 col-12 md:col-6 lg:col-4">
              <div className="card surface !p-4 transition duration-500 hover:-translate-y-1.5">
                {/* Image du projet */}
                <Link href={`/${resource.slug}`}>
                  <ImageFallback
                    src={resource.frontmatter.image || "/images/placeholder.png"}
                    width={445}
                    height={230}
                    alt={resource.frontmatter.title}
                    className="rounded-3xl mb-4"
                  />
                </Link>

                {/* Titre et extrait */}
                <h3 className="h4 mb-2">
                  <Link href={`/${resource.slug}`} className="hover:text-primary transition">
                    {resource.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-sm mb-4">
                  {resource.content.slice(0, 100)}...
                </p>

                {/* Lien vers le détail */}
                <Link href={`/${resource.slug}`} className="btn btn-outline-primary btn-sm">
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceList;