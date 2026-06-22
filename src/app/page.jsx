import { getAllPosts } from "../lib/posts";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import LatestArticles from "../components/LatestArticles";
import Categories from "../components/Categories";
import WhyDevWithAI from "../components/WhyDevWithAI";

const BASE_URL = "https://devwithai.blog";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DevWithAI",
  url: BASE_URL,
  description:
    "AI tools, programming tutorials, React guides, and AI-powered development resources.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "DevWithAI",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/images/favicon.png`,
  },
  description:
    "AI tools, programming tutorials, and development resources for developers.",
  sameAs: ["https://x.com/devwithai", "https://linkedin.com/in/aaqib-javaid"],
};

export default async function Home() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main>
        <Hero totalPosts={posts.length} />
        <FeaturedPosts posts={posts} />
        <LatestArticles posts={posts} />
        <Categories posts={posts} />
        <WhyDevWithAI />
      </main>
    </>
  );
}