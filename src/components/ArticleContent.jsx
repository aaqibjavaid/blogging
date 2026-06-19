import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ArticleContent({ content }) {
  return (
    <article
      className="
        prose
        prose-lg
        lg:prose-xl
        max-w-none
        mt-12

        prose-headings:font-bold
        prose-headings:text-slate-900

        prose-p:text-slate-700
        prose-p:leading-8

        prose-li:text-slate-700

        prose-a:text-purple-600
        prose-a:no-underline

        prose-code:text-purple-500

        prose-pre:bg-slate-900
        prose-pre:text-slate-100

        prose-blockquote:border-l-purple-500
      "
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}