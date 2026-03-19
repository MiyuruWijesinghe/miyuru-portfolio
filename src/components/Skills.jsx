import { FaJava, FaReact, FaDatabase, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { VscAzure, VscJson } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

import {
  SiSpringboot,
  SiGo,
  SiMysql,
  SiMongodb,
  SiJenkins,
  SiPostman,
  SiSwagger,
  SiGooglecloud,
  SiJavascript,
  SiHtml5,
  SiFirebase,
  SiArgo,
  SiGrafana,
  SiJira
} from "react-icons/si";

function Skills() {

  const skillGroups = [
    {
      category: "Backend",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F" },
        { name: "Go", icon: <SiGo />, color: "#00ADD8" },
        { name: "APIs", icon: <TbApi />, color: "#FF6F61" },
        { name: "JSON", icon: <VscJson />, color: "#F5F5F5" }
      ]
    },
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DBFB" },
        { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
        { name: "HTML", icon: <SiHtml5 />, color: "#E34F26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "Oracle", icon: <FaDatabase />, color: "#F80000" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" }
      ]
    },
    {
      category: "Cloud",
      skills: [
        { name: "Google Cloud", icon: <SiGooglecloud />, color: "#4285F4" },
        { name: "Azure", icon: <VscAzure />, color: "#0078D4" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Jenkins", icon: <SiJenkins />, color: "#D24939" },
        { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
        { name: "Swagger", icon: <SiSwagger />, color: "#85EA2D" },
        { name: "Argo CD", icon: <SiArgo />, color: "#EF7B4D" },
        { name: "Grafana", icon: <SiGrafana />, color: "#F46800" }
      ]
    },
    {
      category: "Workflow Platforms",
      skills: [
        { name: "JIRA", icon: <SiJira />, color: "#4285F4" }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">

        <h2 className="section-title">Skills</h2>

        <div className="space-y-12">
          {skillGroups.map((group, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">
                {group.category}
              </h3>

              <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-900 rounded-lg flex flex-col items-center justify-center border border-gray-800 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition duration-300"
                  >

                    <div className="text-4xl mb-3" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>

                    <p className="text-sm text-gray-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;