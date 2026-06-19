
import Link from "next/link";
import Image from "next/image";
import SmartImage from "./SmartImage";

export default function PostCard({ post }) {
  // const fallbackImage = "/images/default-blog.png";
  return (
    <article
      key={post.slug}
      className="
        bg-slate-900/60
        border border-white/5
        rounded-3xl
        p-6
        hover:border-purple-500/20
        transition
      "
    >
      <SmartImage
        src={post.image}
        alt={post.title}
        width={800}
        height={450}
        className="w-full rounded-2xl"
      />

      <span className="text-sm text-slate-500">{post.date}</span>

      <h3 className="text-xl font-semibold mt-3">{post.title}</h3>

      <p className="text-slate-400 mt-4 leading-7">{post.excerpt}</p>

      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className="inline-block mt-6 text-purple-400"
      >
        Read Article →
      </Link>
    </article>
  );
}
