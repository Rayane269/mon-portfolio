import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Bts from "@layouts/Bts";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import ResourceList from "@layouts/ResourceList"; // 1. Import du nouveau layout
import { getRegularPage, getSinglePage } from "@lib/contentParser";

const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "bts" ? (
        <Bts data={data} />
      ) : layout === "ResourceList" ? ( // 2. Ajout de la condition pour la liste
        <ResourceList data={data} />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

export const getStaticPaths = async () => {
  const allPages = getSinglePage("content");
  // On récupère aussi les fichiers dans les sous-dossiers si nécessaire
  const paths = allPages.map((item) => ({
    params: {
      regular: item.slug.replace("/", ""), // On nettoie le slug
    },
  }));

  return {
    paths,
    fallback: "blocking", // CHANGE 'false' par 'blocking'
  };
};

export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  let resources = [];
  if (allPages.frontmatter.layout === "ResourceList") {
    try {
      // On ajoute un try/catch pour éviter que le site crash si le dossier manque
      resources = getSinglePage(`content/${regular}`);
    } catch (error) {
      console.warn(`Le dossier content/${regular} est introuvable ou vide.`);
      resources = []; 
    }
  }

  return {
    props: {
      slug: regular,
      data: {
        ...allPages,
        resources: resources,
      },
    },
  };
};