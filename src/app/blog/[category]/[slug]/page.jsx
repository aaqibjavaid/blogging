import { notFound } from "next/navigation";
import { posts } from "../../../../data/posts.js";
import ArticleHeader from "../../../../components/ArticleHeader.jsx";
import ArticleContent from "../../../../components/ArticleContent.jsx";
import RelatedArticles from "../../../../components/RelatedArticles.jsx";

export default async function BlogPost({ params }) {
  const { category, slug } = await params;

  const post = posts.find(
    (post) => post.category === category && post.slug === slug,
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-6 py-24">
      <ArticleHeader post={post} />
      <ArticleContent content={post.content} />
      <RelatedArticles currentPost={post} posts={posts} />
    </article>
  );
}
