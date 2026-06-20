import { getAllPosts } from "../../lib/posts";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog",
  description:
    "Browse all AI and programming tutorials on DevWithAI. Practical guides, tool reviews, and developer workflows.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | DevWithAI",
    description:
      "Browse all AI and programming tutorials on DevWithAI.",
    url: "https://devwithai.blog/blog",
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | DevWithAI",
    description:
      "Browse all AI and programming tutorials on DevWithAI.",
    images: ["/images/default-blog.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogClient posts={posts} />;
}