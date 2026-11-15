import config from "@config/config.json";
import ImageFallback from "@layouts/components/ImageFallback";
import dateFormat from "@lib/utils/dateFormat";
import { plainify } from "@lib/utils/textConverter";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

const Post = ({ post, index }) => {
  const { summary_length, blog_folder } = config.settings;
  const href = `/${blog_folder}/${post.slug}`;
  const number = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <article className="post group relative">
      {/* image */}
      <Link
        href={href}
        className="relative block aspect-[194/100] overflow-hidden rounded-4xl bg-theme-light dark:bg-darkmode-theme-dark"
        data-cursor="Lire"
        aria-label={post.frontmatter.title}
        tabIndex={-1}
      >
        {post.frontmatter.image && (
          <ImageFallback
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.2,.8,.2,1)] group-hover:scale-[1.06]"
            src={post.frontmatter.image}
            alt={post.frontmatter.title}
            width={800}
            height={500}
            loading="lazy"
          />
        )}
        <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
      </Link>

      {/* categories */}
      <ul className="absolute left-4 top-4 flex flex-wrap gap-2">
        {post.frontmatter.categories.map((tag, i) => (
          <li key={"tag-" + i}>
            <Link
              className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur transition hover:bg-ink hover:text-white"
              href={`/categories/${tag.replace(" ", "-")}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>

      {/* body */}
      <div className="mt-6 flex items-start gap-5">
        <div className="min-w-0 flex-1">
          <p className="mb-2 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] text-light dark:text-darkmode-text">
            {number && <span className="text-primary">{number}</span>}
            {dateFormat(post.frontmatter.date)}
          </p>
          <h3 className="font-secondary text-[1.45rem] font-bold leading-[1.15] tracking-tight md:text-[1.65rem]">
            <Link
              href={href}
              className="bg-gradient-to-r from-current to-current bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_2px]"
            >
              {post.frontmatter.title}
            </Link>
          </h3>
          <p className="mt-3 line-clamp-2 text-[15px] text-text dark:text-darkmode-text">
            {plainify(post.content.slice(0, Number(summary_length)))}
          </p>
        </div>
        <Link
          href={href}
          className="btn-circle mt-6"
          aria-label={`Lire : ${post.frontmatter.title}`}
        >
          <IoArrowForward />
        </Link>
      </div>
    </article>
  );
};

export default Post;
