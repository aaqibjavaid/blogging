"use client";

import { useState } from "react";
import PostCard from "../../components/PostCard";
import SearchBar from "../../components/SearchBar";

export default function BlogClient({ posts }) {
  const [searchTerm, setSearchTerm] =
    useState("");

const filteredPosts = posts.filter(
  (post) =>
    (post.title || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
    (post.excerpt || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
);

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Blog
        </h1>

        <p className="text-slate-400 mt-4">
          Search AI & Programming articles
        </p>
      </div>

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-slate-400 text-lg">
            No articles found for{" "}
            <span className="text-white font-medium">
              &ldquo;{searchTerm}&rdquo;
            </span>
          </p>
          <p className="text-slate-500 mt-2 text-sm">
            Try a different keyword.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      )}
    </main>
  );
}