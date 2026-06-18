import { posts } from "../data/posts.js";
import PostCard from "./PostCard";

export default function FeaturedPosts() {
  const featuredPosts = posts.filter(
    (post) => post.featured
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">
        Featured Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <PostCard
            key={post.slug}
            post={post}
          />
        ))}
      </div>
    </section>
  );
}