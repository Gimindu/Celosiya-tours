import { useEffect, useState } from "react";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const [isHotelDetailsOpen, setIsHotelDetailsOpen] = useState(false); // New state for Hotel Details dropdown

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    if (menu === "Hotel Details") {
      setIsHotelDetailsOpen(!isHotelDetailsOpen); // Toggle Hotel Details dropdown
    } else {
      setIsHotelDetailsOpen(false); // Close the dropdown if another menu is clicked
      window.location.hash = menu; // Navigate for other menu items
    }
  };

  useEffect(() => {
    // Ensure navigation to the "home" section on refresh
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
        {["home", "about-us", "Events", "Hotel Details", "Reviews", "gallery", "contact-us"].map((menu) => (
          <li
            key={menu}
            className={`relative ${menu === "Hotel Details" ? "dropdown" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={menu !== "Hotel Details" ? `#${menu}` : "#"}
              className={`relative text-gray-300 hover:text-white transition-all duration-300 ${
                activeMenu === menu ? "text-white" : ""
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Hotel Details" && isHotelDetailsOpen && (
              <ul className="absolute left-0 top-full bg-black/70 text-white shadow-lg mt-2 rounded">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a>
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a>
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
        {["home", "about-us", "Events", "Hotel Details", "Reviews", "gallery", "contact-us"].map((menu) => (
          <li
            key={menu}
            className={`py-2 ${menu === "Hotel Details" ? "dropdown" : ""}`}
            onClick={() => handleMenuClick(menu)}
          >
            <a
              href={menu !== "Hotel Details" ? `#${menu}` : "#"}
              className={`relative hover:text-gray-300 ${
                activeMenu === menu ? "text-white" : ""
              }`}
            >
              {menu.charAt(0).toUpperCase() + menu.slice(1).replace("-", " ")}
            </a>
            {menu === "Hotel Details" && isHotelDetailsOpen && (
              <ul className="ml-4 mt-2">
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#room">Room</a>
                </li>
                <li className="px-4 py-2 hover:bg-orange-500">
                  <a href="#packages">Packages</a>
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
