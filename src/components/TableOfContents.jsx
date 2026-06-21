function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function extractH2Headings(markdown) {
  const regex = /^#{2}\s+(.+)$/gm;
  const results = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const raw = match[1].trim();
    const text = raw
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/`(.+?)`/g, "$1")
      .replace(/_(.+?)_/g, "$1")
      .replace(/\[(.+?)\]\(.+?\)/g, "$1");
    results.push({ text, id: slugify(text) });
  }
  return results;
}

export default function TableOfContents({ content }) {
  const headings = extractH2Headings(content);
  if (headings.length < 2) return null;

  return (
    <nav className="relative mb-12 rounded-2xl overflow-hidden">
      {/* gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/40 via-slate-800/0 to-blue-600/20 p-[1px]">
        <div className="absolute inset-0 rounded-2xl bg-slate-950" />
      </div>

      <div className="relative p-6 sm:p-8">
        {/* header row */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1 h-6 rounded-full bg-gradient-to-b from-purple-500 to-blue-500" />
          <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
            Table of Contents
          </span>
        </div>

        {/* heading list */}
        <ol className="space-y-3 list-none m-0 p-0">
          {headings.map((h, i) => (
            <li key={i} className="m-0 flex items-start gap-3 group/item">
              <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-[11px] font-bold text-purple-400 group-hover/item:bg-purple-500/20 transition-colors duration-200">
                {i + 1}
              </span>
              <a
                href={`#${h.id}`}
                className="text-slate-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium leading-snug no-underline pt-0.5"
              >
                {h.text}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
