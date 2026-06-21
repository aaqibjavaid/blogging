import { getAllPosts } from "../lib/posts";
import Hero from "../components/Hero";
import FeaturedPosts from "../components/FeaturedPosts";
import LatestArticles from "../components/LatestArticles";
import Categories from "../components/Categories";
import WhyDevWithAI from "../components/WhyDevWithAI";

export default async function Home() {
  const posts = getAllPosts();

  return (
    <main>
      <Hero totalPosts={posts.length} />
      <FeaturedPosts posts={posts} />
      <LatestArticles posts={posts} />
      <Categories posts={posts} />
      <WhyDevWithAI />
    </main>
  );
}