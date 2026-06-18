import { posts } from "../data/posts.js";

export default function sitemap() {
  const baseUrl =
    "https://devwithai.blog";

  const articleUrls = posts.map(
    (post) => ({
      url: `${baseUrl}/blog/${post.category}/${post.slug}`,
      lastModified: new Date(),
    })
  );

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },

    ...articleUrls,
  ];
}