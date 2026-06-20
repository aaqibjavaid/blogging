
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "AI Articles",
  description:
    "Discover the best AI tools, comparisons, prompts, and productivity workflows for developers.",
  alternates: { canonical: "/ai" },
  openGraph: {
    title: "AI Articles | DevWithAI",
    description:
      "Discover the best AI tools, comparisons, prompts, and productivity workflows for developers.",
    url: "https://devwithai.blog/ai",
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Articles | DevWithAI",
    description:
      "Discover the best AI tools, comparisons, prompts, and productivity workflows for developers.",
    images: ["/images/default-blog.png"],
  },
};

const POSTS_PER_PAGE = 6;

export default async function AIPage({
  searchParams,
}) {
  const { page } = await searchParams;
  const posts = getAllPosts();
  const currentPage = Number(page || 1);

  const aiPosts = posts.filter(
    (post) => post.category === "ai"
  );

  const totalPages = Math.ceil(
    aiPosts.length / POSTS_PER_PAGE
  );

  const paginatedPosts = aiPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12">
        AI Articles
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedPosts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        basePath="/ai"
      />
    </main>
  );
}