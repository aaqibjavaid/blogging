import { getAllPosts } from "../lib/posts";

const BASE_URL = "https://devwithai.blog";

export default function sitemap() {
  const posts = getAllPosts();

  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/blog`, priority: 0.9 },
    { url: `${BASE_URL}/ai`, priority: 0.9 },
    { url: `${BASE_URL}/programming`, priority: 0.9 },
    { url: `${BASE_URL}/ai-programming`, priority: 0.9 },
    { url: `${BASE_URL}/about`, priority: 0.6 },
    { url: `${BASE_URL}/contact`, priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, priority: 0.3 },
    { url: `${BASE_URL}/terms-&-conditions`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    lastModified: new Date(),
    priority,
  }));

  const articlePages = posts
    .filter((post) => post.date && !isNaN(new Date(post.date).getTime()))
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.category}/${post.slug}`,
      lastModified: new Date(post.date),
      priority: 0.8,
    }));

  return [...staticPages, ...articlePages];
}
