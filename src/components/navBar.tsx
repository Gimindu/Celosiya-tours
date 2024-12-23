import { SetStateAction, useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (menu: SetStateAction<string>) => {
    setActiveMenu(menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-lg p-6 backdrop-blur-md bg-black/40 text-white z-10 font-semibold shadow-lg">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-tight flex items-center space-x-2">
        <span>Logo</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10">
        {["home", "Events", "Packages", "Reviews", "about-us", "contact-us"].map((menu) => (
          <li
            key={menu}
            className="group"
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={`#${menu}`}
              className={`relative text-gray-300 hover:text-white transition-all duration-300 ${activeMenu === menu ? "text-white" : ""}`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
              <span
                className={`absolute left-0 bottom-0 w-0 h-1 bg-orange-500 group-hover:w-12 ${
                  activeMenu === menu ? "w-12" : "w-0"
                } transition-all duration-500 ease-in-out origin-bottom-left mt-1`}
              ></span>
            </a>
          </li>
        ))}
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
        {["home", "Events", "Packages", "Reviews", "about-us", "contact-us"].map((menu) => (
          <li
            key={menu}
            className="py-2"
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={`#${menu}`}
              className={`relative hover:text-gray-300 ${activeMenu === menu ? "text-white" : ""}`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
              <span
                className={`absolute left-0 bottom-0 w-0 h-1 bg-orange-500 group-hover:w-12 ${
                  activeMenu === menu ? "w-12" : "w-0"
                } transition-all duration-500 ease-in-out origin-bottom-left mt-1`}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
