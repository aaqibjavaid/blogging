import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { getPost, getAllPosts } from "../../../../lib/posts.js";

import ArticleHeader from "../../../../components/ArticleHeader";
import ArticleContent from "../../../../components/ArticleContent";
import RelatedArticles from "../../../../components/RelatedArticles";

const BASE_URL = "https://devwithai.blog";

function resolveOgImage(imagePath) {
  if (imagePath) {
    const fullPath = path.join(process.cwd(), "public", imagePath);
    if (fs.existsSync(fullPath)) return `${BASE_URL}${imagePath}`;
  }
  return `${BASE_URL}/images/default-blog.png`;
}

export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  try {
    const post = getPost(category, slug);
    const ogImage = resolveOgImage(post.frontmatter.image);

    return {
      title: post.frontmatter.title,
      description:
        post.frontmatter.description ||
        "AI and Programming articles on DevWithAI",

      alternates: {
        canonical: `${BASE_URL}/blog/${category}/${slug}`,
      },

      openGraph: {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        url: `${BASE_URL}/blog/${category}/${slug}`,
        siteName: "DevWithAI",
        type: "article",
        publishedTime: post.frontmatter.date,
        authors: [post.frontmatter.author || "Aaqib Javaid"],
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.frontmatter.title,
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Article Not Found" };
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

  const articleUrl = `${BASE_URL}/blog/${category}/${slug}`;
  const imageUrl = resolveOgImage(post.frontmatter.image);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: imageUrl,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author || "Aaqib Javaid",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "DevWithAI",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/default-blog.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.frontmatter.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="max-w-4xl mx-auto px-6 py-24">
        <ArticleHeader post={currentPost} />
        <ArticleContent content={post.content} />
        <RelatedArticles currentPost={currentPost} posts={allPosts} />
      </article>
    </>
  );
}
