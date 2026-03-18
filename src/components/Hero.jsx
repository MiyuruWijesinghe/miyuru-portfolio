import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Miyuru Kanishka
          </h1>

          <h2 className="text-2xl text-gray-400 mb-6">
            Software Engineer
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            I build scalable backend systems and APIs using Java,
            Spring Boot, and cloud technologies. Passionate about
            solving complex engineering problems and building
            reliable enterprise software.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="btn-primary"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="btn-outline"
            >
              Contact Me
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-6 mt-8 text-xl">

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
              href="mailto:mkwijesinghe2024@gmail.com"
              className="hover:text-blue-400 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">
          <div className="w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">

            <span className="text-6xl font-bold text-white">
              MK
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;