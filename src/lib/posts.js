import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";

const contentDirectory = path.join(
  process.cwd(),
  "src/content"
);

export const getPost = cache(function getPost(category, slug) {
  const filePath = path.join(
    contentDirectory,
    category,
    `${slug}.mdx`
  );

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: data,
    content,
  };
});

export const getAllPosts = cache(function getAllPosts() {
  const categories = fs.readdirSync(contentDirectory);
  const posts = [];

  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, category);
    const files = fs.readdirSync(categoryPath);

    files.forEach((file) => {
      const source = fs.readFileSync(
        path.join(categoryPath, file),
        "utf8"
      );

      const { data } = matter(source);

      posts.push({
        slug: file.replace(".mdx", ""),
        category,
        ...data,
      });
    });
  });

  return posts.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
});
