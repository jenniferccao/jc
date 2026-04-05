const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-background px-6 py-2 z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center relative">

        <img src="/logo_small.png" alt="logo" className="w-[150px]" />

        <div className="hidden md:flex items-center space-x-8 absolute right-0 text-lg">
          <a href="#about" className="text-foreground hover:text-green transition-colors">About</a>
          <a href="#projects" className="text-foreground hover:text-green transition-colors">Projects</a>
          <a href="#contact" className="text-foreground hover:text-green transition-colors">Design</a>
        </div>

        <button className="md:hidden text-foreground absolute right-0">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
