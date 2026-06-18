import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DevWithAI
            </h2>

            <p className="text-slate-400 mt-4 leading-7">
              Learn AI, Programming, and AI-powered development through
              practical tutorials, tools, and real-world guides.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Categories
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <Link
                  href="/ai"
                  className="hover:text-blue-400 transition"
                >
                  AI
                </Link>
              </li>

              <li>
                <Link
                  href="/programming"
                  className="hover:text-blue-400 transition"
                >
                  Programming
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-programming"
                  className="hover:text-blue-400 transition"
                >
                  AI + Programming
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          {/* <div> */}
            {/* <h3 className="font-semibold text-lg mb-4">
              Connect
            </h3> */}

            {/* <div className="flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://x.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition"
              >
                <FaXTwitter size={20} />
              </a>
            </div> */}
          {/* </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevWithAI.blog. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-400">
            <Link
              href="/about"
              className="hover:text-blue-400 transition"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </Link>

            <Link
              href="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}