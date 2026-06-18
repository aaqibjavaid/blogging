"use client";

export default function SearchBar({
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="mb-12">
      <input
        type="text"
        placeholder="Search articles..."
        value={searchTerm}
        onChange={(e) =>
          setSearchTerm(e.target.value)
        }
        className="
          w-full
          bg-slate-900/60
          border border-white/10
          rounded-2xl
          px-5
          py-4
          outline-none
          focus:border-purple-500
        "
      />
    </div>
  );
}