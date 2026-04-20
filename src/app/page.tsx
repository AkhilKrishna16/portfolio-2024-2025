import { Analytics } from "@vercel/analytics/react";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import TextSwap from "@/components/text-swap";
import { getAllPosts } from "@/lib/blog";

const experiences = [
  {
    company: "incoming @  (summer 2026)",
    role: "swe",
  },
  {
    company: "codefour (yc x25)",
    role: "ai/ml",
  },
  {
    company: "fidelity",
    role: "swe",
  },
  {
    company: "university of north texas - covis",
    role: "cv research",
  },
];

const projects = [
  {
    name: "blnded v0 (beta)",
    tech: "blip, clip, pinecone",
    link: "https://nextblnded.com",
  },
  {
    name: "gpu mandelbrot set generator",
    tech: "cuda, c, openmp",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7396971491789221888/",
  },
  {
    name: "longhorn eats",
    tech: "react native, gcp, python",
    link: "https://apps.apple.com/us/app/lh-eats/id6468611223/",
  },
];

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="max-w-lg mx-auto px-6 py-20 text-gray-900 dark:text-zinc-100">
      <Analytics />

      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-1">
            akhil krishnamurthy
          </h1>
        </div>
        <ThemeToggle />
      </div>

      <p className="text-sm leading-relaxed text-gray-600 dark:text-zinc-400 mb-16">
        love gpus and math, trying to improvise daily, constantly searching up
        s**t. still afraid of posting on x :(
      </p>

      <section className="mb-12">
        <h2 className="text-xs font-medium tracking-widest text-gray-400 dark:text-zinc-600 mb-5">
          experiences
        </h2>
        <div className="flex flex-col gap-4">
          {experiences.map((exp) => (
            <a
              key={exp.company}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-baseline text-sm group"
            >
              <span>
                <span className="font-medium group-hover:underline underline-offset-2">
                  {exp.company.includes("\uF8FF") ? (
                    <>
                      {exp.company.split("\uF8FF")[0]}
                      <TextSwap defaultText={"\uF8FF"} hoverText="apple" />
                      {exp.company.split("\uF8FF")[1]}
                    </>
                  ) : (
                    <span className="underline-offset-2">{exp.company}</span>
                  )}
                </span>
                <span className="text-gray-500 dark:text-zinc-500">
                  {" "}
                  · {exp.role}
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xs font-medium tracking-widest text-gray-400 dark:text-zinc-600 mb-5">
          builds
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((proj) => (
            <a
              key={proj.name}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-baseline text-sm group"
            >
              <span>
                <span className="font-medium group-hover:underline underline-offset-2">
                  {proj.name}
                </span>
                <span className="text-gray-500 dark:text-zinc-500">
                  {" "}
                  · {proj.tech}
                </span>
              </span>
              <span className="text-gray-400 dark:text-zinc-600 text-xs ml-6 shrink-0">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {posts.length > 0 && (
        <section className="mb-16">
          <h2 className="text-xs font-medium tracking-widest text-gray-400 dark:text-zinc-600 mb-5">
            blog
          </h2>
          <div className="flex flex-col gap-4">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex justify-between items-baseline text-sm group"
              >
                <span>
                  <span className="font-medium group-hover:underline underline-offset-2">
                    {post.title}
                  </span>
                  <span className="text-gray-500 dark:text-zinc-500">
                    {" "}
                    · {post.description}
                  </span>
                </span>
                <span className="text-gray-400 dark:text-zinc-600 text-xs ml-6 shrink-0">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="flex gap-5 text-gray-400 dark:text-zinc-600">
        <a
          href="https://github.com/AkhilKrishna16"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-150"
        >
          <FaGithub size={17} />
        </a>
        <a
          href="https://www.linkedin.com/in/akhil-kri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-150"
        >
          <FaLinkedin size={17} />
        </a>
        <a
          href="https://x.com/akhil_krish_"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-150"
        >
          <FaXTwitter size={17} />
        </a>
        <a
          href="mailto:akhil2006@utexas.edu"
          aria-label="Email"
          className="hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-150"
        >
          <FaEnvelope size={17} />
        </a>
      </div>
    </main>
  );
}
