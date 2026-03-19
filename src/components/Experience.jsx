import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Experience() {

  const experiences = [
    {
      role: "Software Engineer",
      company: "LOLC Technologies",
      location: "Sri Lanka",
      period: "2024 – Present",
      points: [
        "Lead development team in Fixed Deposits domain",
        "Design and develop backend features for a production-grade financial system",
        "Implement RESTful APIs using Java and Spring Boot",
        "Perform critical deployments to QA, UAT, and Production environments",
        "Conduct code reviews to ensure quality, maintainability, and best practices",
        "Validate and verify source code during production releases",
        "Prepare technical design specifications based on business requirements",
        "Mentor trainees and support knowledge-sharing initiatives"
      ]
    },
    {
      role: "Senior Associate Software Engineer",
      company: "LOLC Technologies",
      location: "Sri Lanka",
      period: "2021 – 2023",
      points: [
        "Contributed to main core banking system development project",
        "Designed and implemented REST APIs using Spring Boot and Java",
        "Collaborated with internal and outsourced teams in Agile environments",
        "Supported release cycles and performed critical deployments",
        "Ensured timely delivery of features aligned with business needs"
      ]
    },
    {
      role: "Trainee Software Engineer",
      company: "LOLC Technologies",
      location: "Sri Lanka",
      period: "2019 – 2021",
      points: [
        "Balanced full-time development responsibilities while studying at SLIIT under a full scholarship",
        "Designed transactional reports using Jaspersoft",
        "Developed PL/SQL procedures and queries for Oracle Database",
        "Performed bug fixes and enhancements across modules",
        "Collaborated with team members to meet project deadlines"
      ]
    },
    {
      role: "ICT Technician",
      company: "Medical Research Institute",
      location: "Sri Lanka",
      period: "2018 – 2019",
      points: [
        "Generated reports for Food and Water Department",
        "Provided technical support using Microsoft Office tools",
        "Assisted with networking, hardware, and software troubleshooting"
      ]
    }
  ];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section">
      <div className="container">

        <h2 className="section-title">Experience</h2>

        <div
          ref={ref}
          className="relative max-w-4xl mx-auto"
        >

          {/* animated progress line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-0 w-[3px] h-full origin-top bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]"
          />

          <div className="relative ml-6 pl-8">

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 relative"
              >

                {/* glowing timeline node */}
                <span className="absolute -left-[34px] top-2 flex h-5 w-5">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]"></span>

                </span>

                {/* experience card */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition duration-300">

                  <div className="mb-3">

                    <h3 className="text-xl font-semibold">
                        {exp.role}
                    </h3>

                    <div className="flex items-center gap-4 text-sm">

                        <span className="text-blue-400">
                        {exp.company}
                        </span>

                        <span className="flex items-center gap-1 text-gray-400">
                        <FaMapMarkerAlt className="text-red-400" />
                        {exp.location}
                        </span>

                    </div>
                  </div>

                  <p className="text-sm text-white-500 mb-4">
                    {exp.period}
                  </p>

                  <ul className="list-disc ml-5 text-gray-400 space-y-1">

                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}

                  </ul>
                </div>
              </motion.div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;