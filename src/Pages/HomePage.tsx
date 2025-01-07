import image1 from "../assets/images/Services/guided-tours.png";
import image2 from "../assets/images/Services/flight.png";
import image3 from "../assets/images/Services/religious.png";
import image4 from "../assets/images/Services/support.png";

export default function HomePage() {
  return (
    <>
      <div
        id="home"
        className="bg-[url('./assets/images/sg.png')] bg-cover h-screen flex flex-col items-center justify-center relative"
      >
        <p className="text-white text-left px-4 sm:px-8 lg:px-32 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-20 sm:mt-28 lg:ml-96 ">
          "No matter where <br /> you want to go, we will <br /> take you there"
        </p>
        <div className="py-9 sm:py-11">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 px-4 sm:px-8 lg:grid-cols-4 ">
            <div className="shadow-lg rounded-lg group">
              <img
                src={image1}
                alt="Guided Tours"
                className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image2}
                alt="Flight Booking"
                className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image3}
                alt="Religious Trips"
                className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image4}
                alt="Customer Support"
                className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
