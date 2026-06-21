import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import TableOfContents from "./TableOfContents";

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

function getTextContent(children) {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (children?.props?.children) return getTextContent(children.props.children);
  return "";
}

const linkCls = "text-purple-400 underline underline-offset-2 decoration-purple-500/50 hover:text-purple-300 hover:decoration-purple-400 transition-colors duration-150";

const mdxComponents = {

  /* ── Headings ─────────────────────────────── */
  h2: ({ children, ...props }) => {
    const id = slugify(getTextContent(children));
    return (
      <h2 id={id} className="group relative flex items-center gap-3 text-2xl sm:text-3xl font-black text-slate-900 mt-14 mb-5 scroll-mt-24" {...props}>
        <span className="absolute -left-4 top-1 bottom-1 w-[3px] rounded-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
        {children}
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const id = slugify(getTextContent(children));
    return (
      <h3 id={id} className="flex items-center gap-2.5 text-xl sm:text-2xl font-black text-slate-900 mt-10 mb-4 scroll-mt-24" {...props}>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-0.5" />
        {children}
      </h3>
    );
  },

  h4: ({ children, ...props }) => (
    <h4 className="text-lg font-bold text-slate-600 mt-8 mb-3" {...props}>{children}</h4>
  ),

  /* ── Paragraph ────────────────────────────── */
  p: ({ children, ...props }) => (
    <p className="text-slate-800 leading-8 mb-6 text-base sm:text-lg" {...props}>{children}</p>
  ),

  /* ── Links ────────────────────────────────── */
  a: ({ href, children }) => {
    const isInternal = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternal) return <Link href={href} className={linkCls}>{children}</Link>;
    return <a href={href} className={linkCls} target="_blank" rel="noopener noreferrer">{children}</a>;
  },

  /* ── Inline code ──────────────────────────── */
  code: ({ children, className }) => {
    if (className) return <code className={className}>{children}</code>;
    return (
      <code className="px-1.5 py-0.5 rounded-md bg-slate-800 border border-white/8 text-purple-300 text-[0.875em] font-mono">
        {children}
      </code>
    );
  },

  /* ── Code block ───────────────────────────── */
  pre: ({ children }) => {
    const codeEl = children?.props;
    const lang = codeEl?.className?.replace("language-", "") || "code";
    const code = codeEl?.children || "";
    return (
      <div className="my-8 rounded-2xl overflow-hidden border border-white/8 shadow-xl shadow-black/30">
        {/* header bar */}
        <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-white/8">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">{lang}</span>
          <div className="w-16" />
        </div>
        {/* code body */}
        <pre className="overflow-x-auto bg-slate-950 px-6 py-5 text-sm leading-7 text-slate-500 font-mono m-0">
          <code>{code}</code>
        </pre>
      </div>
    );
  },

  /* ── Blockquote ───────────────────────────── */
  blockquote: ({ children }) => (
    <blockquote className="relative my-8 pl-6 pr-5 py-5 rounded-r-2xl bg-purple-500/5 border-l-4 border-purple-500 italic text-slate-300 leading-8">
      <div className="absolute top-3 left-5 text-4xl text-purple-500/20 font-serif leading-none select-none">&ldquo;</div>
      {children}
    </blockquote>
  ),

  /* ── Lists ────────────────────────────────── */
  ul: ({ children }) => (
    <ul className="my-6 space-y-2.5 text-slate-800 text-base sm:text-lg leading-7">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="my-6 space-y-2.5 text-slate-800 text-base sm:text-lg leading-7 list-none counter-reset-[item]">{children}</ol>
  ),

  li: ({ children, ...props }) => (
    <li className="flex items-start gap-3" {...props}>
      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
      <span className="flex-1">{children}</span>
    </li>
  ),

  /* ── HR ───────────────────────────────────── */
  hr: () => (
    <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
  ),

  /* ── Table ────────────────────────────────── */
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-2xl border border-white/8">
      <table className="w-full text-sm text-slate-800">{children}</table>
    </div>
  ),

  thead: ({ children }) => (
    <thead className="bg-slate-900 border-b border-white/8">{children}</thead>
  ),

  tbody: ({ children }) => (
    <tbody className="divide-y divide-white/5">{children}</tbody>
  ),

  tr: ({ children }) => (
    <tr className="hover:bg-white/3 transition-colors duration-150">{children}</tr>
  ),

  th: ({ children }) => (
    <th className="px-5 py-3.5 text-left text-xs font-bold uppercase tracking-widest text-slate-100">{children}</th>
  ),

  td: ({ children }) => (
    <td className="px-5 py-3.5 text-slate-800">{children}</td>
  ),

  /* ── Strong / Em ──────────────────────────── */
  strong: ({ children }) => (
    <strong className="font-bold">{children}</strong>
  ),

  em: ({ children }) => (
    <em className="italic text-slate-600">{children}</em>
  ),

  /* ── Image ────────────────────────────────── */
  img: ({ src, alt }) => (
    <figure className="my-10">
      <img src={src} alt={alt} className="w-full rounded-2xl border border-white/8 shadow-xl shadow-black/30" />
      {alt && <figcaption className="mt-3 text-center text-xs text-slate-500">{alt}</figcaption>}
    </figure>
  ),
};

export default function ArticleContent({ content }) {
  return (
    <div className="mt-10">
      <TableOfContents content={content} />

      <div className="relative pl-0 sm:pl-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={mdxComponents}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
