import { FaCertificate } from "react-icons/fa";

function Certifications() {

  const certifications = [
    {
      name: "Azure Fundamentals",
      code: "AZ-900",
      image: `${import.meta.env.BASE_URL}certifications/az900.png`
    },
    {
      name: "Azure AI Fundamentals",
      code: "AI-900",
      image: `${import.meta.env.BASE_URL}certifications/ai900.png`
    },
    {
      name: "Azure Security Fundamentals",
      code: "SC-900",
      image: `${import.meta.env.BASE_URL}certifications/sc900.png`
    },
    {
      name: "Postman API Fundamentals",
      code: " ",
      image: `${import.meta.env.BASE_URL}certifications/postman.png`
    },
    {
      name: "ICT Technician - NVQ Level 4",
      code: " ",
      image: `${import.meta.env.BASE_URL}certifications/naita.png`
    }
  ];

  return (
    <section id="certifications" className="section">

      <div className="container max-w-5xl mx-auto">

        <h2 className="section-title flex items-center justify-center gap-3">

          <FaCertificate className="text-blue-400" />

          Certifications

        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">

          {certifications.map((cert, index) => (

            <div
              key={index}
              className="aspect-square bg-gray-900 rounded-lg border border-gray-800 flex flex-col items-center justify-center p-4 hover:border-blue-500 hover:shadow-[0_0_18px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition duration-300"
            >

              <img
                src={cert.image}
                alt={cert.name}
                className="w-24 mb-4"
              />

              <h3 className="text-center font-semibold">
                {cert.name}
              </h3>

              <p className="text-blue-400 text-sm">
                {cert.code}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certifications;