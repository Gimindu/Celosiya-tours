import { useEffect, useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu === "Services") {
      setIsServicesOpen(!isServicesOpen);
    } else {
      setIsServicesOpen(false);
      window.location.hash = menu;
    }
  };

  useEffect(() => {
    setActiveMenu("home");
    window.location.hash = "home";
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center text-lg p-6 backdrop-blur-md bg-black/40 text-white z-10 font-semibold shadow-lg">
      {/* Logo */}
      <div className="text-3xl font-extrabold tracking-tight flex items-center space-x-2">
        <span>Logo</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10">
        {["home", "about-us", "Events", "Services", "Reviews", "gallery", "contact-us"].map((menu) => (
          <li
            key={menu}
            className={`relative ${menu === "Services" ? "dropdown" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={menu !== "Services" ? `#${menu}` : "#"}
              className={`relative text-gray-300 hover:text-white transition-all duration-300 ${
                activeMenu === menu ? "text-white" : ""
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Services" && isServicesOpen && (
              <ul className="absolute left-0 top-full bg-black/70 text-white shadow-lg mt-2 rounded">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a> {/* Scrolls to the room section */}
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a> {/* Scrolls to the packages section */}
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
        className={`md:hidden absolute top-16 left-0 w-full bg-black/50 text-white p-4 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {["home", "about-us", "Events", "Services", "Reviews", "gallery", "contact-us"].map((menu) => (
          <li
            key={menu}
            className={`py-2 ${menu === "Services" ? "dropdown" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={menu !== "Services" ? `#${menu}` : "#"}
              className={`relative hover:text-gray-300 ${
                activeMenu === menu ? "text-white" : ""
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Services" && isServicesOpen && (
              <ul className="ml-4 mt-2">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a> {/* Scrolls to the room section */}
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a> {/* Scrolls to the packages section */}
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
