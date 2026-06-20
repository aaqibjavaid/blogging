
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "AI + Programming",
  description:
    "Learn how to build AI-powered applications and integrate AI into modern developer workflows.",
  alternates: { canonical: "/ai-programming" },
  openGraph: {
    title: "AI + Programming | DevWithAI",
    description:
      "Learn how to build AI-powered applications and integrate AI into modern developer workflows.",
    url: "https://devwithai.blog/ai-programming",
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI + Programming | DevWithAI",
    description:
      "Learn how to build AI-powered applications and integrate AI into modern developer workflows.",
    images: ["/images/default-blog.png"],
  },
};

const POSTS_PER_PAGE = 6;

export default async function AIProgrammingPage({
  searchParams,
}) {
  const { page } = await searchParams;
  const posts = getAllPosts();
  const currentPage = Number(page || 1);

  const aiProgrammingPosts =
    posts.filter(
      (post) =>
        post.category ===
        "ai-programming"
    );

  const totalPages = Math.ceil(
    aiProgrammingPosts.length /
      POSTS_PER_PAGE
  );

  const paginatedPosts =
    aiProgrammingPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12">
        AI + Programming
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
        basePath="/ai-programming"
      />
    </main>
  );
}