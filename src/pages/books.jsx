import Link from "next/link";
import { Layout } from "components/layout";

import { frontMatter as blogPosts } from "./blog/**/*.mdx";

export default function Home() {
  const blogPostsSorted = blogPosts.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  return (
    <Layout>
      <div>Books I've read.</div>

      <div>Coming soon...</div>
    </Layout>
  );
}
