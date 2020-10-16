const mdxPrism = require("mdx-prism");
const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "src/components/blog-layout",
  defaultLayout: true,
  remarkPlugins: [
    require("remark-code-titles"),
    require("remark-unwrap-images"),
  ],
  rehypePlugins: [mdxPrism],
  pageExtensions: ["js", "jsx", "mdx", "md"],
})();
