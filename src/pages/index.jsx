import Link from "next/link";
import { Layout } from "components/layout";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

export default function Home() {
  const blogPostsSorted = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Layout>
      <div className="py-10">Hi! I'm Johan.</div>

      <div className="text-xl font-semibold">Blog posts</div>
      <div className="">
        {blogPostsSorted.map((post) => {
          console.log({ post });

          if ("draft" in post && post.draft) return null;

          const slug = post.__resourcePath
            .replace(/.*pages\//, "")
            .replace(".mdx", "");

          return (
            <Link href="/blog/[slug]" as={`${slug}`} key={slug}>
              <a className="cursor-pointer text-indigo-600 hover:underline">
                <div className="py-4">
                  {post.title}, {post.publishedAt}
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
