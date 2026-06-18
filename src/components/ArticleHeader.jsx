export default function ArticleHeader({ post }) {
  if (!post) return null;

  return (
    <div className="mb-16">
      <span className="inline-flex px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 capitalize">
        {post.category.replace("-", " ")}
      </span>

      <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight">
        {post.title}
      </h1>

      <div className="flex items-center gap-4 mt-4 text-slate-500">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readingTime}</span>
      </div>

      <p className="text-xl text-slate-1000 mt-8 leading-8">
        {post.excerpt}
      </p>
    </div>
  );
}