import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

function Footer() {

  return (
    <footer className="border-t border-gray-800 mt-20">

      <div className="container max-w-6xl mx-auto py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Name */}
          <a
            href="#top"
            className="text-lg font-semibold hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition"
          >
            Miyuru Kanishka
          </a>

          {/* Navigation */}
          <div className="flex gap-6 text-sm text-gray-400">

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#experience" className="hover:text-white transition">
              Experience
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#blogs" className="hover:text-white transition">
              Blogs
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>

          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">

            <a
              href="https://github.com/MiyuruWijesinghe"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/miyuru-wijesinghe-9164022b6"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://medium.com/@miyuruwijesinghe"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaMedium />
            </a>

          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm mt-8">

          © {new Date().getFullYear()} Miyuru Kanishka.  
          All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;