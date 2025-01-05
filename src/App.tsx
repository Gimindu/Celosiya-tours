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

export default function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <NavBar />

      {/* Define Routes for dynamic content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/review" element={<Review />} />
        <Route path="/gallery" element={<Gellery />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/all_packages" element={<AllPackages />} />
      </Routes>

      {/* Main page content that scrolls */}
      <HomePage />
      <AboutUs />
      <Events />
      <Packages />
      <Hotel />
      <Review />
      <Gellery />
      <ContactUs />
     
      {/* WhatsApp Icon visible on all pages */}
      <WhatsAppIcon />
    </Router>
  );
}
