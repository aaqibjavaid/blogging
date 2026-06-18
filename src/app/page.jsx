import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedPosts from "../components/FeaturedPosts";
import WhyDevWithAI from "../components/WhyDevWithAI";
// import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedPosts />
      <WhyDevWithAI />
      {/* <Newsletter /> */}
    </main>
  );
}