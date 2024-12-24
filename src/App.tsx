import NavBar from "./components/navBar";
import WhatsAppIcon from "./components/whatsppIcon";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Events";
import HomePage from "./Pages/HomePage";
import Packages from "./Pages/Packages";
import Review from "./Pages/Review";


export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage/>
      <Events /> 
      <Packages />
      <Review/>
      <ContactUs />
      <WhatsAppIcon />  

   
    </>
  );
}
