import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(
  process.cwd(),
  "src/content"
);

export function getAllPosts() {
  const categories =
    fs.readdirSync(contentDirectory);

  const posts = [];

  categories.forEach((category) => {
    const categoryPath = path.join(
      contentDirectory,
      category
    );

    const files =
      fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const filePath = path.join(
        categoryPath,
        file
      );

      const source =
        fs.readFileSync(filePath, "utf8");

      const { data } =
        matter(source);

      posts.push({
        ...data,
        slug: file.replace(".mdx", ""),
      });
    });
  });

  return posts;
}

export function getPost(category, slug) {
  const filePath = path.join(
    contentDirectory,
    category,
    `${slug}.mdx`
  );

  const source =
    fs.readFileSync(filePath, "utf8");

  const { data, content } =
    matter(source);

  return {
    frontmatter: data,
    content,
  };
}