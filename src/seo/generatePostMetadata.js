export function generatePostMetadata(
  post,
  category,
  slug
) {
  return {
    title: post.frontmatter.title,

    description:
      post.frontmatter.description,

    alternates: {
      canonical:
        `https://devwithai.blog/blog/${category}/${slug}`,
    },

    openGraph: {
      title:
        post.frontmatter.title,

      description:
        post.frontmatter.description,

      images: [
        post.frontmatter.image,
      ],
    },
  };
}