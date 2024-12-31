import image1 from '../assets/images/guided-tours.png';
import image2 from '../assets/images/flight.png';
import image3 from '../assets/images/religious.png';
import image4 from '../assets/images/support.png';

export default function HomePage() {
  return (
    <>
      <div
        id="home"
        className="bg-[url('./assets/images/sg.png')] bg-cover h-screen flex items-center justify-center relative"
      >
        <p className="text-white text-left lg:ms-96 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          "No matter where <br />you want to go, we will <br />take you there"
        </p>
        {/* Image row at the bottom center */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 mb-4 flex space-x-6">
          {/* Individual images */}
          <img
            src={image1}
            alt="Image 1"
            className="w-48 lg:w-56 transition-transform duration-300 hover:scale-110"
          />
          <img
            src={image2}
            alt="Image 2"
            className="w-48 lg:w-56 transition-transform duration-300 hover:scale-110"
          />
          <img
            src={image3}
            alt="Image 3"
            className="w-48 lg:w-56 transition-transform duration-300 hover:scale-110"
          />
          <img
            src={image4}
            alt="Image 4"
            className="w-48 lg:w-56 transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}
