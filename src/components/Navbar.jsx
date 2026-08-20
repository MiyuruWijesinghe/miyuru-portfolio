import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#blogs", label: "Blogs" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/90 via-[#1e293b]/90 to-[#312e81]/90 border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MiyuruW.dev</h1>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-gray-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-300 hover:text-blue-400 transition"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-6 text-gray-300 bg-[#0f172a]/95 border-t border-gray-800">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="pt-4 hover:text-blue-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
