import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact",
  description: "Contact DevWithAI",
};

export default function ContactPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center">
        <span className="text-purple-400 font-medium">
          CONTACT
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Get In Touch
        </h1>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Have a question, collaboration opportunity,
          sponsorship inquiry, or feedback? Feel free
          to reach out.
        </p>
      </div>

      <div className="mt-16 space-y-6">
        <a
          href="mailto:contact@devwithai.blog"
          className="
            flex items-center gap-4
            bg-slate-900/60
            border border-white/5
            rounded-2xl
            p-6
            hover:border-purple-500/20
            transition
          "
        >
          <MdEmail
            size={24}
            className="text-purple-400"
          />

          <div>
            <p className="text-slate-400 text-sm">
              Email
            </p>

            <p>contact@devwithai.blog</p>
          </div>
        </a>

        <a
          href="https://linkedin.com/in/aaqib-javaid"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-4
            bg-slate-900/60
            border border-white/5
            rounded-2xl
            p-6
            hover:border-purple-500/20
            transition
          "
        >
          <FaLinkedin
            size={24}
            className="text-blue-400"
          />

          <div>
            <p className="text-slate-400 text-sm">
              LinkedIn
            </p>

            <p>Connect With Me</p>
          </div>
        </a>
      </div>
    </main>
  );
}