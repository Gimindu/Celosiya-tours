import { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Player from "lottie-react";
import loadingAnimation from "./assets/loading.json"; // Import the JSON file

// Lazy load pages and components
const NavBar = lazy(() => import("./components/navBar"));
const WhatsAppIcon = lazy(() => import("./components/whatsppIcon"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Events = lazy(() => import("./Pages/Events"));
const HomePage = lazy(() => import("./Pages/HomePage"));
const Packages = lazy(() => import("./Pages/Packages"));
const Review = lazy(() => import("./Pages/Review"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const Gellery = lazy(() => import("./Pages/Gellary"));
const Hotel = lazy(() => import("./Pages/Hotel"));
const AllPackages = lazy(() => import("./Pages/AllPackages"));
const NotFoundPage = lazy(() => import("./Pages/404page"));

// Full-screen loader component
const FullScreenLoader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
    <div className="text-center px-4 py-8 sm:px-8 sm:py-12 md:px-16 md:py-16">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4 animate-bounce">
        Welcome to Celosiya Tours
      </h1>
      <div className="relative flex justify-center">
        <Player
          animationData={loadingAnimation} // Use the correct prop for the animation data
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 animate-spin-slow"
          loop
          autoplay
        />
<div className="absolute inset-0 flex justify-center items-center text-white text-xl sm:text-2xl font-semibold animate-pulse mt-64 sm:mt-64 lg:mt-96">
<p>Loading, please wait...</p>
        </div>
      </div>
    </div>
  </div>
);

const MainContent = () => {
  return (
    <Suspense fallback={<FullScreenLoader />}>
      <HomePage />
      <AboutUs />
      <Events />
      <Packages />
      <Hotel />
      <Review />
      <Gellery />
      <ContactUs />
    </Suspense>
  );
};

function Layout() {
  const location = useLocation();

  return (
    <>
      {/* Conditionally render NavBar */}
      <Suspense fallback={<FullScreenLoader />}>
        {location.pathname !== "/all_packages" && <NavBar />}
      </Suspense>

      {/* Routes for the application */}
      <Routes>
        <Route
          path="/all_packages"
          element={
            <Suspense fallback={<FullScreenLoader />}>
              <AllPackages />
            </Suspense>
          }
        />
        <Route
          path="/*"
          element={
            <Suspense fallback={<FullScreenLoader />}>
              <MainContent />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<FullScreenLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Routes>

      {/* WhatsApp Icon visible on all pages */}
      <Suspense fallback={<FullScreenLoader />}>
        <WhatsAppIcon />
      </Suspense>
    </>
  );
}

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(true); //false the adda delay

  useEffect(() => {
    const handleLoad = () => {
      setIsPageLoaded(true); // Remove the delay and set it immediately
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Show the loader until the page fully loads */}
      {!isPageLoaded && <FullScreenLoader />}
      {isPageLoaded && (
        <Router>
          <Suspense fallback={<FullScreenLoader />}>
            <Layout />
          </Suspense>
        </Router>
      )}
    </>
  );
}
