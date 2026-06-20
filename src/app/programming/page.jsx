
import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { getAllPosts } from "../../lib/posts";

export const metadata = {
  title: "Programming Articles",
  description:
    "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
  alternates: { canonical: "/programming" },
  openGraph: {
    title: "Programming Articles | DevWithAI",
    description:
      "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
    url: "https://devwithai.blog/programming",
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Articles | DevWithAI",
    description:
      "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
    images: ["/images/default-blog.png"],
  },
};

const POSTS_PER_PAGE = 6;

export default async function ProgrammingPage({
  searchParams,
}) {
  const { page } = await searchParams;
  const posts = getAllPosts();
  const currentPage = Number(page || 1);

  const programmingPosts = posts.filter(
    (post) =>
      post.category === "programming"
  );

  const totalPages = Math.ceil(
    programmingPosts.length /
      POSTS_PER_PAGE
  );

  const paginatedPosts =
    programmingPosts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE
    );

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12">
        Programming Articles
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
        basePath="/programming"
      />
    </main>
  );
}