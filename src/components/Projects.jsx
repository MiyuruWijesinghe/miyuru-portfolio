import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Hospital Bed Management System",
      description:
        "A system designed to manage hospital wards, bed allocation, and patient placement efficiently.",
      image: "/projects/hospital-system.png",
      tech: ["React", "Go", "PostgreSQL"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Core Banking API",
      description:
        "RESTful APIs built for financial transaction processing within a core banking platform.",
      image: "/projects/rgb-aqua-mart.png",
      tech: ["Java", "Spring Boot", "Oracle"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio website showcasing experience, projects, and certifications.",
      image: "/projects/aspeak.png",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Hospital Bed Management System",
      description:
        "A system designed to manage hospital wards, bed allocation, and patient placement efficiently.",
      image: "/projects/conference.png",
      tech: ["React", "Go", "PostgreSQL"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Core Banking API",
      description:
        "RESTful APIs built for financial transaction processing within a core banking platform.",
      image: "/projects/shopping.png",
      tech: ["Java", "Spring Boot", "Oracle"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio website showcasing experience, projects, and certifications.",
      image: "/projects/police-complaints.png",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/yourrepo"
    },
    {
      title: "Developer Portfolio",
      description:
        "Personal portfolio website showcasing experience, projects, and certifications.",
      image: "/projects/pizza-store.png",
      tech: ["React", "Tailwind", "Vite"],
      github: "https://github.com/yourrepo"
    }
  ];

  return (
    <section id="projects" className="section">

      <div className="container max-w-6xl mx-auto">

        <h2 className="section-title">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="group bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-2 transition duration-300"
            >

              {/* Project Image */}
              <div className="aspect-[1:1] overflow-hidden rounded-t-xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
                </div>

              {/* Project Content */}
              <div className="p-5">

                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-800/70 px-2 py-1 rounded-md border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* GitHub Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 hover:underline transition"
                >
                  <FaGithub />
                  View Code
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;