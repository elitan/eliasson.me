import Link from "next/link";
import { NextSeo } from "next-seo";

import { Layout } from "components/layout";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

const title = `Johan Eliasson`;
const description = `- Founder of Nhost (Google Firebase competitor). Programmer ∩ Entrepreneur. - Apps, Workout, Books. `;

export default function Home() {
  const blogPostsSorted = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://eliasson.me`}
        twitter={{
          title: title,
          description: description,
          cardType: "summary_large_image",
          image: `https://eliasson.me/images/website-cover.png`,
          site: "elitasson",
          handle: "elitasson",
        }}
        openGraph={{
          url: `https://eliasson.me`,
          title: title,
          description: description,
          images: [
            { url: `https://eliasson.me/images/website-cover.png`, alt: title },
          ],
          site_name: "Johan Eliasson",
        }}
      />

      <div className="py-10">
        Hi! I'm Johan, founder of <a href="https://nhost.io">Nhost</a>.
      </div>

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
