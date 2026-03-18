import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa";

function Contact() {

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "mkwijesinghe2024@gmail.com",
      link: "mailto:mkwijesinghe2024@gmail.com",
      color: "#EA4335"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/MiyuruWijesinghe",
      link: "https://github.com/MiyuruWijesinghe",
      color: "#ffffff"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/miyuru-wijesinghe",
      link: "https://www.linkedin.com/in/miyuru-wijesinghe-9164022b6",
      color: "#0A66C2"
    },
    {
      icon: <FaMedium />,
      label: "Medium",
      value: "medium.com/miyuruwijesinghe",
      link: "https://medium.com/@miyuruwijesinghe",
      color: "#ffffff"
    }
  ];

  return (
    <section id="contact" className="section">

      <div className="container max-w-5xl mx-auto">

        <h2 className="section-title">Contact</h2>

        <p className="text-center text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Feel free to reach out for new opportunities, collaborations, or just a friendly chat.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {contacts.map((contact, index) => (

            <a
              key={index}
              href={contact.link || "#"}
              target="_blank"
              rel="noreferrer"
              className="aspect-square bg-gray-900 rounded-xl border border-gray-800 flex flex-col items-center justify-center gap-3 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1 transition duration-300"
            >

              <div
                className="text-3xl"
                style={{ color: contact.color }}
              >
                {contact.icon}
              </div>

              <p className="text-sm font-medium">
                {contact.label}
              </p>

              <p className="text-xs text-gray-400 text-center px-2">
                {contact.value}
              </p>

            </a>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;