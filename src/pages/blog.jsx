import Link from "next/link";
import { Layout } from "components/layout";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

export default function Home() {
  const blogPostsSorted = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12">
        <div className="py-6 text-center uppercase text-lg">
          Posts I've written
        </div>
        <div className="">
          {blogPostsSorted.map((post) => {
            if ("draft" in post && post.draft) return null;

            const slug = post.__resourcePath
              .replace(/.*pages\//, "")
              .replace(".mdx", "");

            return (
              <Link href="/blog/[slug]" as={`${slug}`} key={slug}>
                <a className="flex border rounded-sm p-6 shadow-lg hover:shadow-2xl transition-all ease-linear duration-200">
                  <div
                    className="bg-cover bg-center"
                    style={{
                      width: "300px",
                      height: "200px",
                      backgroundImage: `url(${post.imageOriginal})`,
                    }}
                  />
                  <div className="ml-4">
                    <div className="text-3xl">{post.title}</div>
                    <div className="py-4 text-lg text-gray-700">
                      {post.description}
                    </div>
                    <div className="text-gray-700">{post.publishedAt}</div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
