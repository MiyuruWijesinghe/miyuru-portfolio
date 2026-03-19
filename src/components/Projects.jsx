import { FaGithub } from "react-icons/fa";

function Projects() {

  const projects = [
    {
      title: "Hospital Bed Management System",
      description:
        "A system designed to manage hospital wards, bed allocation, and patient placement efficiently.",
      image: "/projects/hospital-system.png",
      tech: ["React", "Go", "MySQL"],
      githubFrontend: "https://github.com/MiyuruWijesinghe/hospital-frontend",
      githubBackend: "https://github.com/MiyuruWijesinghe/hospital-bed-system"
    },
    {
      title: "RGB Aqua Mart",
      description:
        "E-commerce platform for aquarium products, enabling users to browse, manage, and purchase fish and accessories.",
      image: "/projects/rgb-aqua-mart.png",
      tech: ["React","Java", "Spring Boot", "MySQL"],
      githubFrontend: "https://github.com/MiyuruWijesinghe/rgb-aqua-mart",
      githubBackend: "https://github.com/MiyuruWijesinghe/rgb-aqua-mart-be"
    },
    {
      title: "ASpeak Grammar",
      description:
        "A mobile-based application that converts sign language gestures into Sinhala text.",
      image: "/projects/aspeak.png",
      tech: ["Python", "HTML", "JavaScript", "CSS"],
      githubFrontend: "https://github.com/MiyuruWijesinghe/ASpeakGrammarAPI",
      githubBackend: "https://github.com/MiyuruWijesinghe/ASpeakGrammar"
    },
    {
      title: "Conference Management System",
      description:
        "A system designed to manage conference events, including scheduling sessions, managing attendees, and coordinating speakers efficiently.",
      image: "/projects/conference.png",
      tech: ["React", "Java", "Spring Boot", "MongoDB"],
      githubFrontend: "https://github.com/MenukaJ/conference-management-ui",
      githubBackend: "https://github.com/MiyuruWijesinghe/conference-management"
    },
    {
      title: "Online Shopping Store",
      description:
        "E-commerce application that allows users to browse products, manage carts, and securely place orders with a smooth user experience.",
      image: "/projects/shopping.png",
      tech: ["React", "Java", "Spring Boot", "MongoDB"],
      githubFrontend: "https://github.com/MiyuruWijesinghe/online-shopping-store",
      githubBackend: "https://github.com/MiyuruWijesinghe/online-shopping-store-backend"
    },
    {
      title: "Complaints Management System",
      description:
        "A web-based system for managing and tracking public complaints for Sri Lankan Police.",
      image: "/projects/police-complaints.png",
      tech: ["React", "ExpressJS", "NodeJS", "MongoDB"],
      githubFrontend: "https://github.com/hannahrahman/ITP---Group-1"
    },
    {
      title: "Online Pizza Store",
      description:
        "A pizza ordering system that allows users to browse menus, customize orders, and manage purchases.",
      image: "/projects/pizza-store.png",
      tech: ["React", "Java", "Spring Boot", "MongoDB"],
      githubFrontend: "https://github.com/MiyuruWijesinghe/PizzaStore",
      githubBackend: "https://github.com/MiyuruWijesinghe/PizzaStore-backend"
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
                <div className="flex gap-4 mt-2">

                  {project.githubFrontend && (
                    <a
                      href={project.githubFrontend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-400 text-sm hover:underline transition"
                    >
                      <FaGithub />
                      Frontend
                    </a>
                  )}

                  {project.githubBackend && (
                    <a
                      href={project.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-green-400 text-sm hover:underline transition"
                    >
                      <FaGithub />
                      Backend
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;