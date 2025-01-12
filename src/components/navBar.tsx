import { useEffect, useState } from "react";
import logo from "@/assets/images/logo design t.avif"; // Import logo image

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for Services dropdown

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu !== "Services") {
      window.location.hash = menu; // Navigate for other menu items
      setIsServicesOpen(false); // Close Services dropdown if another menu is clicked
    } else {
      setIsServicesOpen(!isServicesOpen); // Toggle Services dropdown
    }
  };

  const handleLogoClick = () => {
    window.location.hash = "home"; // Scroll back to home page
  };

  useEffect(() => {
    setActiveMenu("home");
    window.location.hash = "home";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-lg p-4 backdrop-blur-md bg-black/40 text-white z-10 font-semibold shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-auto cursor-pointer" // Add cursor pointer to indicate it's clickable
          onClick={handleLogoClick} // Add click handler for logo
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10">
        {[
          "home",
          "about-us",
          "Events",
          "Services",
          "Reviews",
          "gallery",
          "contact-us",
        ].map((menu) => (
          <li
            key={menu}
            className={`relative ${menu === "Services" ? "group" : ""}`}
          >
            <a
              href={menu !== "Services" ? `#${menu}` : undefined} // Remove href for Services
              className={`relative text-gray-300 hover:text-white transition-all duration-300 ${
                activeMenu === menu ? "text-white" : ""
              } ${menu === "Services" ? "cursor-pointer" : ""}`}
              onClick={menu !== "Services" ? () => handleMenuClick(menu) : () => handleMenuClick("Services")}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Services" && isServicesOpen && (
              <ul className="absolute left-0 top-full bg-black/70 text-white shadow-lg mt-2 rounded transition-all duration-500 ease-in-out opacity-100">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a>
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden absolute top-24 left-0 w-full bg-black/50 text-white p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {[
          "home",
          "about-us",
          "Events",
          "Services",
          "Reviews",
          "gallery",
          "contact-us",
        ].map((menu) => (
          <li key={menu} className="py-2">
            <a
              href={`#${menu}`}
              className={`relative hover:text-gray-300 ${
                activeMenu === menu ? "text-white" : ""
              }`}
              onClick={() => handleMenuClick(menu)}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Services" && isServicesOpen && (
              <ul className="ml-4 mt-2 transition-all duration-500 ease-in-out">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a>
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a>
                </li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
