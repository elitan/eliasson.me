import React from "react";
import { NextSeo } from "next-seo";

import { Layout } from "components/layout";

export default function BlogLayout({ children, frontMatter }) {
  const {
    title,
    description,
    publishedAt,
    author,
    twitter,
    image,
    imageOriginal,
  } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace(/.*pages\//, "")
    .replace(".mdx", "");

  const currentTimestamp = Math.floor(Date.now() / 1000);

  return (
    <Layout>
      <NextSeo
        title={title}
        description={description}
        canonical={`https://eliasson.me/blog${slug}`}
        twitter={{
          title: title,
          description: description,
          cardType: "summary_large_image",
          image: `https://eliasson.me${image}?cache=${currentTimestamp}`,
          site: "elitasson",
          handle: twitter,
        }}
        openGraph={{
          url: `https://eliasson.me/blog${slug}`,
          title: title,
          description: description,
          images: [
            {
              url: `https://eliasson.me${image}?cache=${currentTimestamp}`,
              alt: title,
            },
          ],
          site_name: "Johan Eliasson",
        }}
      />

      <div className="py-16">
        <div className="container mx-auto">
          <div className="text-center text-gray-700">{publishedAt}</div>
          <h1 className="text-4xl font-bold text-center py-4">{title}</h1>
        </div>

        <div className="w-full flex justify-center py-12">
          <img src={imageOriginal} alt={title} style={{ width: "600px" }} />
        </div>

        <div className="container mx-auto prose sm:prose-xl px-4">
          {children}
        </div>

        <div className="w-full border-t my-12" />
        <div className="conatinaer mx-auto prose sm:prose-xl px-4 mb-12">
          Did you like this? You should{" "}
          <a href={`https://twitter.com/${twitter}`}>follow me on Twitter</a>{" "}
          where I write about programming and entreprenureship.
        </div>

        <div className="flex items-center justify-center mb-32 text-xl">
          <img
            className="w-20 rounded-full"
            src={`https://twitter-avatar.now.sh/${twitter}`}
            alt={`${twitter}'s avatar on Twitter`}
          />
          <div className="ml-6">
            <div className="m-0">{author}</div>
            <div className="m-0 text-indigo-400">
              <a href={`https://twitter.com/${twitter}`}>@{twitter}</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
