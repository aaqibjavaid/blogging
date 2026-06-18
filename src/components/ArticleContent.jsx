export default function ArticleContent({ content }) {
  return (
    <div
      className="
        prose
        prose-invert
        prose-lg
        max-w-none

        prose-headings:text-white
        prose-p:text-slate-1000
        prose-li:text-slate-1000
        prose-strong:text-white
        prose-a:text-purple-400

        mt-12
      "
    >
      <div className="whitespace-pre-line">
        {content}
      </div>
    </div>
  );
}