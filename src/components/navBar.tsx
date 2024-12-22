import { useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-lg p-6 backdrop-blur-md bg-black/40 text-white z-10 font-semibold shadow-lg">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-tight flex items-center space-x-2">
        <span>Logo</span>
      </div>
      
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10">
        <li className="group">
          <a
            href="#home"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#Events"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            Events
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#Packages"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            Packages
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#Reviews"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            Reviews
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#contact"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
        <li className="group">
          <a
            href="#about-us"
            className="relative text-gray-300 hover:text-white transition-all duration-300"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-white group-hover:w-full transition-all duration-500 ease-in-out origin-bottom-left"></span>
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-16 left-0 w-full bg-black/50 text-white p-4 ${isMenuOpen ? "block" : "hidden"}`}
      >
        <li className="py-2">
          <a href="#home" className="hover:text-gray-300">Home</a>
        </li>
        <li className="py-2">
          <a href="#Events" className="hover:text-gray-300">Events</a>
        </li>
        <li className="py-2">
          <a href="#Packages" className="hover:text-gray-300">Packages</a>
        </li>
        <li className="py-2">
          <a href="#Reviews" className="hover:text-gray-300">Reviews</a>
        </li>
        <li className="py-2">
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </li>
        <li className="py-2">
          <a href="#about-us" className="hover:text-gray-300">About Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
