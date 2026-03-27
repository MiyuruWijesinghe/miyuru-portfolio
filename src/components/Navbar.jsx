function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/90 via-[#1e293b]/90 to-[#312e81]/90 border-b border-gray-800 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold">MiyuruW.dev</h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#hero" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#blogs" className="hover:text-blue-400 transition">Blogs</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;