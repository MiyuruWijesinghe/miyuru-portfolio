import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-blue-400 mb-2">Hello, I'm</p>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Miyuru Kanishka
          </h1>

          <h2 className="text-2xl text-gray-400 mb-6">
            Software Engineer |{" "}
            <TypeAnimation
              sequence={[
                "Tech Enthusiast",
                2000,
                "Full Stack Enthusiast",
                2000,
                "Backend Developer",
                2000,
                "Java Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-blue-400"
            />
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Software Engineer with 7+ years of experience designing and building scalable software applications. 
            Passionate about solving complex problems, writing clean and efficient code, collaborating with teams, and delivering reliable solutions that create real impact.
          </p>

          <p className="text-gray-400 mb-4 leading-relaxed">
            Passionate about Information and Communication Technology since childhood, 
            I have grown my career step by step into a Software Engineer.
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

          <div className="relative w-72 aspect-[3/4]">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 rounded-xl"></div>

            {/* Image */}
            <img
              src="/profile.png"
              alt="Miyuru Kanishka"
              className="relative w-full h-full object-cover rounded-xl border border-gray-800 shadow-lg hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:scale-105 transition duration-300"
            />

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;