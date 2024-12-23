import NavBar from "./components/navBar";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Events";
import HomePage from "./Pages/HomePage";
import Packages from "./Pages/Packages";


export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage/>
      <Events /> 
      <Packages />
      <ContactUs />
   
    </>
  );
}
