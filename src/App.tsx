import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages and components
import NavBar from "./components/navBar";
import WhatsAppIcon from "./components/whatsppIcon";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Events";
import HomePage from "./Pages/HomePage";
import Packages from "./Pages/Packages";
import Review from "./Pages/Review";
import AboutUs from "./Pages/AboutUs";
import Gellery from "./Pages/Gellary";
import Hotel from "./Pages/Hotel";
import AllPackages from "./Pages/AllPackages";

const MainContent = () => {
  return (
    <>
      <HomePage />
      <AboutUs />
      <Events />
      <Packages />
      <Hotel />
      <Review />
      <Gellery />
      <ContactUs />
      
    </>
  );
};

export default function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <NavBar />

      {/* Define Routes for dynamic content */}
      <Routes>
        <Route path="/all_packages" element={<AllPackages />} />
        <Route
          path="/*"
          element={<MainContent />}
        />
      </Routes>

      {/* WhatsApp Icon visible on all pages */}
      <WhatsAppIcon />
    </Router>
  );
}