import { markdownify } from "@lib/utils/textConverter";
import shortcodes from "@shortcodes/all";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote";
import ImageFallback from "./components/ImageFallback";

const About = ({ data }) => {
  const { frontmatter, mdxContent } = data;
  const { title, image, education, experience, skills } = frontmatter;


  return (
    <section className="section ">
      <div className="container text-center">
        {image && (
          <div className="mb-8">
            <ImageFallback
              src={image}
              width={1298}
              height={616}
              alt={title}
              className="rounded-5xl"
            />
          </div>
        )}
        {markdownify(title, "h1", "display text-left text-[3rem] md:text-[5rem] mt-6 mb-10")}

        <div className="content text-left justify-normal">
          <MDXRemote {...mdxContent} components={shortcodes} />
        </div>

        <div className=" text-left ">
          <div className=" ">
            <div className="surface">
              {markdownify(education.title, "h2", "section-title mb-12")}
              <div className="row">
                {education.degrees.map((degree, index) => (
                  <div className="mb-7 md:col-6" key={"degree-" + index}>
                    <h4 className="text-base lg:text-[25px]">
                      {degree.university}
                    </h4>
                    <p className="mt-2">{degree.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Experience 1 */}
            {experience && (
              <div className="experience">
              <div className="surface h-full">
                {markdownify(experience.title, "h2", "section-title mb-12")}
                <ul className="row">
                  {experience?.list?.map((item, index) => (
                    <li
                      className="mb-5 text-lg font-bold text-dark dark:text-darkmode-light"
                      key={"experience-1-" + index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
            

            {skills && (
              <div className="skills">
                <div className="surface h-full">
                  <h2 className="section-title mb-8">{skills.title}</h2>
                  <div className="space-y-6">
                    {skills.categories.map((category, index) => (
                      <div key={"skill-category-" + index}>
                        <h4 className="mb-3 text-lg font-semibold text-dark dark:text-darkmode-light">
                          {category.name}
                        </h4>

                        <div className="flex flex-wrap gap-3">
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
                </div>
              </div>
            )}
          </div>
          <div className="mt-10 flex justify-center">
              <Link
                className="btn btn-primary mt-6"
                href="/cv/CV_MA_2026_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consulter mon CV
              </Link>


            </div>
        </div>
      </div>
    </section >
  );
};

export default About;
