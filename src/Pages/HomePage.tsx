import image1 from "../assets/images/Services/guided-tours.avif";
import image2 from "../assets/images/Services/tarnsportop.avif";
import image3 from "../assets/images/Services/religious.avif";
import image4 from "../assets/images/Services/support.avif";

export default function HomePage() {
  return (
    <>
      <div
        id="home"
        className="bg-[url('./assets/images/background_img/sg.avif')] bg-cover h-screen flex flex-col items-center justify-center relative"
      >
        <p className="text-white text-center px-4 sm:px-8 lg:px-32 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12 sm:mb-20 mt-12">
          "No matter where <br /> you want to go, we will <br /> take you there"
        </p>
        <div className="py-6 sm:py-9">
          <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
            <div className="shadow-lg rounded-lg group">
              <img
                src={image1}
                alt="Guided Tours"
                className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image2}
                alt="Flight Booking"
                className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image3}
                alt="Religious Trips"
                className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="shadow-lg rounded-lg group">
              <img
                src={image4}
                alt="Customer Support"
                className="w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
