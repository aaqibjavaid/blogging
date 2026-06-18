import Link from "next/link";

const categories = [
  {
    title: "AI",
    description:
      "Discover AI tools, prompts, comparisons and productivity workflows.",
    link: "/ai",
  },
  {
    title: "Programming",
    description:
      "React, JavaScript, Next.js and modern frontend development.",
    link: "/programming",
  },
  {
    title: "AI + Programming",
    description:
      "Build AI-powered applications and developer workflows.",
    link: "/ai-programming",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">
          Explore Categories
        </h2>

        <p className="text-slate-400 mt-4">
          Learn faster with practical developer-focused content.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.link}
            className="
              p-8
              rounded-3xl
              bg-white
              shadow-lg
              border border-white/5
              hover:border-purple-500/20
              transition
            "
          >
            <h3 className="text-2xl font-semibold">
              {category.title}
            </h3>

            <p className="mt-4 text-slate-400">
              {category.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}