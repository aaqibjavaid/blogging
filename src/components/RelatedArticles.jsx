import Link from "next/link";

export default function RelatedArticles({
  currentPost,
  posts,
}) {
  const relatedPosts = posts
    .filter(
      (post) =>
        post.category === currentPost.category &&
        post.slug !== currentPost.slug
    )
    .slice(0, 3);

  if (!relatedPosts.length) return null;

  return (
    <section className="mt-24">
      <h2 className="text-3xl font-bold mb-8">
        Related Articles
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.category}/${post.slug}`}
            className="
              bg-slate-900/60
              border border-white/5
              rounded-2xl
              p-6
              hover:border-purple-500/20
              transition
            "
          >
            <h3 className="font-semibold">
              {post.title}
            </h3>

            <p className="text-slate-400 text-sm mt-3">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}