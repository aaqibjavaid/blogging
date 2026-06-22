import { getAllPosts } from "../lib/posts";

const BASE_URL = "https://devwithai.blog";

export default function sitemap() {
  const posts = getAllPosts();

  const staticPages = [
    "/",
    "/blog",
    "/ai",
    "/programming",
    "/ai-programming",
    "/about",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
    "/terms-and-conditions",
  ];

  const staticEntries = staticPages.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      route === "/"
        ? 1.0
        : ["/ai", "/programming", "/ai-programming", "/blog"].includes(route)
        ? 0.9
        : 0.6,
  }));

  const articleEntries = posts
    .filter(
      (post) =>
        post.slug &&
        post.category &&
        post.date &&
        !isNaN(new Date(post.date).getTime())
    )
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.category}/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: post.featured ? 0.9 : 0.8,
    }));

  return [...staticEntries, ...articleEntries];
}