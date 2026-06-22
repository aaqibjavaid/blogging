import { getAllPosts } from "../../lib/posts";
import BlogClient from "./BlogClient";

const BASE_URL = "https://devwithai.blog";

export const metadata = {
  title: "Blog",
  description:
    "Browse all AI and programming tutorials on DevWithAI. Practical guides, tool reviews, and developer workflows.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | DevWithAI",
    description: "Browse all AI and programming tutorials on DevWithAI.",
    url: `${BASE_URL}/blog`,
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | DevWithAI",
    description: "Browse all AI and programming tutorials on DevWithAI.",
    images: ["/images/default-blog.png"],
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "DevWithAI Blog",
  url: `${BASE_URL}/blog`,
  description:
    "Browse all AI and programming tutorials on DevWithAI. Practical guides, tool reviews, and developer workflows.",
  publisher: {
    "@type": "Organization",
    name: "DevWithAI",
    url: BASE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogClient posts={posts} />
    </>
  );
}