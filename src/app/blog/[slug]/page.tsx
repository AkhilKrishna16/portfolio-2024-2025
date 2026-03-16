import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import ThemeToggle from "@/components/theme-toggle";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "not found" };
  return { title: post.title };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="max-w-lg mx-auto px-6 py-20 text-gray-900 dark:text-zinc-100">
      <div className="flex justify-between items-center mb-8">
        <Link
          href="/"
          className="text-sm text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors duration-150"
        >
          &larr; back
        </Link>
        <ThemeToggle />
      </div>

      <h1 className="text-2xl font-semibold tracking-tight mb-1">
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 dark:text-zinc-500 mb-8">
        {formattedDate}
      </p>

      <article className="prose prose-sm prose-gray dark:prose-invert">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </main>
  );
}
