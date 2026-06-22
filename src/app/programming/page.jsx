import PostCard from "../../components/PostCard";
import Pagination from "../../components/Pagination";
import { getAllPosts } from "../../lib/posts";

const BASE_URL = "https://devwithai.blog";

export const metadata = {
  title: "Programming Articles",
  description:
    "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
  alternates: { canonical: "/programming" },
  openGraph: {
    title: "Programming Articles | DevWithAI",
    description:
      "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
    url: `${BASE_URL}/programming`,
    images: [{ url: "/images/default-blog.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Programming Articles | DevWithAI",
    description:
      "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
    images: ["/images/default-blog.png"],
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Programming Articles | DevWithAI",
  url: `${BASE_URL}/programming`,
  description:
    "React, JavaScript, Next.js, and modern frontend development tutorials for developers of all levels.",
  isPartOf: { "@type": "WebSite", name: "DevWithAI", url: BASE_URL },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Programming",
      item: `${BASE_URL}/programming`,
    },
  ],
};

const POSTS_PER_PAGE = 6;

export default async function ProgrammingPage({ searchParams }) {
  const { page } = await searchParams;
  const posts = getAllPosts();
  const currentPage = Number(page || 1);

  const programmingPosts = posts.filter((p) => p.category === "programming");
  const totalPages = Math.ceil(programmingPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = programmingPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <main className="relative overflow-hidden">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative pt-28 pb-16">

        {/* glow orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-700/12 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-blue-600/8 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute top-10 right-0 w-[300px] h-[300px] bg-cyan-600/8 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">
            ◈ Programming
          </div>

          <h1 className="text-5xl sm:text-6xl font-black leading-[1.1] tracking-tight">
            <span className="text-white">Learn</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent pb-1">
              Modern Development
            </span>
          </h1>

          <p className="max-w-xl mx-auto mt-6 text-slate-400 leading-relaxed">
            Deep-dive tutorials on React, Next.js, JavaScript, and modern frontend
            development — written for engineers who want to ship real products.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-400">
            <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            <span><span className="text-white font-bold">{programmingPosts.length}</span> articles published</span>
          </div>
        </div>
      </section>

      {/* ── Grid ────────────────────────────────── */}
      <section className="relative py-16">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="flex items-center justify-between gap-4 mb-10 flex-wrap">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">
                Page {currentPage} of {totalPages || 1}
              </p>
              <h2 className="text-2xl font-black text-white">
                All Programming Articles
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-400">
              {programmingPosts.length} total
            </div>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">No articles found.</div>
          )}

          <Pagination currentPage={currentPage} totalPages={totalPages} basePath="/programming" />
        </div>
      </section>

    </main>
    </>
  );
}
