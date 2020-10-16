import React from "react";
import { NextSeo } from "next-seo";
import { Header } from "components/layout";

export default function BlogLayout({ children, frontMatter }) {
  const {
    title,
    description,
    publishedAt,
    author,
    twitter,
    image,
  } = frontMatter;

  const slug = frontMatter.__resourcePath
    .replace(/.*pages\//, "")
    .replace(".mdx", "");

  return (
    <div>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: `https://eliasson.me/blog${slug}`,
          title: title,
          description: description,
          images: [{ url: `https://eliasson.me${frontMatter.image}` }],
        }}
      />
      <Header />
      <div className="container mx-auto" style={{ fontSize: "110%" }}>
        <div className="text-center text-gray-600">
          {frontMatter.publishedAt}
        </div>
        <h1 className="text-4xl font-bold text-center py-4">
          {frontMatter.title}
        </h1>
      </div>

      <div className="w-full flex justify-center py-12">
        <img src={frontMatter.image} />
      </div>

      <div className="container mx-auto prose">{children}</div>

      <div className="w-full border-t my-12" />
      <div className="conatinaer mx-auto prose mb-12">
        Did you like this? You should{" "}
        <a href={`https://twitter.com/${twitter}`}>follow me on Twitter</a>{" "}
        where I write about programming and entreprenureship.
      </div>

      <div className="flex items-center justify-center mb-32">
        <img
          className="w-20 rounded-full"
          src={`https://twitter-avatar.now.sh/${twitter}`}
          alt={`${twitter}'s avatar on Twitter`}
        />
        <div className="ml-6">
          <div className="m-0">{frontMatter.author}</div>
          <div className="m-0 text-indigo-400">
            <a href={`https://twitter.com/${twitter}`}>
              @{frontMatter.twitter}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
