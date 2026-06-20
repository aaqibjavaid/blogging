import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "../../../../lib/posts.js";

import ArticleHeader from "../../../../components/ArticleHeader";
import ArticleContent from "../../../../components/ArticleContent";
import RelatedArticles from "../../../../components/RelatedArticles";

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// SEO Metadata
export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const fallbackImage = "/images/default-blog.png";

  try {
    const post = getPost(category, slug);

    return {
      title: post.frontmatter.title,
      description:
        post.frontmatter.description ||
        "AI and Programming articles on DevWithAI",

      alternates: {
        canonical: `https://devwithai.blog/blog/${category}/${slug}`,
      },

      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        images: post.frontmatter.image
          ? [post.frontmatter.image]
          : [fallbackImage],
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        images: post.frontmatter.image
          ? [post.frontmatter.image]
          : [fallbackImage],
      },
    };
  } catch {
    return {
      title: "Article Not Found",
    };
  }
}

export default async function BlogPost({ params }) {
  const { category, slug } = await params;

  let post;

  try {
    post = getPost(category, slug);
  } catch {
    notFound();
  }

  const allPosts = getAllPosts();

  const currentPost = {
    ...post.frontmatter,
    slug,
    category,
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-24">
      <ArticleHeader post={currentPost} />

      <ArticleContent content={post.content} />

      <RelatedArticles
        currentPost={currentPost}
        posts={allPosts}
      />
    </article>
  );
}