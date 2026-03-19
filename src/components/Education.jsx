import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [
    {
      degree: "BSc (Hons) in Information Technology - Software Engineering",
      institute: "Sri Lanka Institute of Information Technology (SLIIT)",
      period: "2019 – 2023"
    },
    {
      degree: "ICT Technician - NVQ Level 4",
      institute: "National Apprentice & Industrial Training Authority, Sri Lanka",
      period: "2017 – 2019"
    },
    {
      degree: "School - Advanced Level",
      institute: "Thurstan College, Colombo",
      period: "2014 – 2016"
    },
    {
      degree: "School - Ordinary Level",
      institute: "ST.Thomas College, Kotte",
      period: "2003 – 2013"
    }
  ];

  return (
    <section id="education" className="section">

      <div className="container max-w-4xl mx-auto">

        <h2 className="section-title flex items-center justify-center gap-3">

          <FaGraduationCap className="text-blue-400" />

          Education

        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (

            <div
              key={index}
              className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-5 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-1 transition duration-300"
            >

              <h3 className="text-lg font-semibold">
                {edu.degree}
              </h3>

              <p className="text-blue-400">
                {edu.institute}
              </p>

              <p className="text-white-500 text-sm">
                {edu.period}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;