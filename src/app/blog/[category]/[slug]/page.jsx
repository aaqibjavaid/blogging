import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "../../../../lib/posts.js";

import ArticleHeader from "../../../../components/ArticleHeader";
import ArticleContent from "../../../../components/ArticleContent";
import RelatedArticles from "../../../../components/RelatedArticles";

export default async function BlogPost({
  params,
}) {
  const { category, slug } =
    await params;

  let post;

  try {
    post = getPost(
      category,
      slug
    );
  } catch {
    notFound();
  }

  const allPosts =
    getAllPosts();

  const currentPost = {
    ...post.frontmatter,
    slug,
    category,
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-24">
      <ArticleHeader
        post={currentPost}
      />

      <ArticleContent
        content={post.content}
      />

      <RelatedArticles
        currentPost={currentPost}
        posts={allPosts}
      />
    </article>
  );
}