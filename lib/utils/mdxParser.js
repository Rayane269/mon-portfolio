import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// mdx content parser
const parseMDX = async (content) => {
  const options = {
    mdxOptions: {
      rehypePlugins: [rehypeSlug],
      remarkPlugins: [remarkGfm],
      format: 'mdx' // On force le format pour éviter les ambiguïtés
    },
    parseFrontmatter: true // Optionnel mais recommandé en v6
  };
  return await serialize(content, options);
};

export default parseMDX;