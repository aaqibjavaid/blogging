import Link from "next/link";
import PostCard from "./PostCard";

const LATEST_COUNT = 6;

export default function LatestArticles({ posts = [] }) {
  const latestPosts = posts.slice(0, LATEST_COUNT);

  if (!latestPosts.length) return null;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl font-bold">Latest Articles</h2>

        <Link
          href="/blog"
          className="text-purple-400 hover:text-purple-300 transition text-sm font-medium"
        >
          View all →
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
