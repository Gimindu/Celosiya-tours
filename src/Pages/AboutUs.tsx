import topImage from '../assets/images/heading.png';
import rightImage from '../assets/images/aboutus.png';

export default function AboutUs() {
  return (
    <div id="about-us" className="bg-[url('./assets/images/aboutbg.png')] bg-cover bg-center h-screen relative">
      {/* Top center image */}
      <div className="absolute top-16 sm:top-24 left-0 w-full flex justify-center">
        <img src={topImage} alt="Top Image" className="w-30 sm:w-30 h-auto" />
      </div>

      {/* Left corner text */}
      <div className="absolute left-4 sm:left-8 top-[35%] sm:top-[45%] text-white max-w-xs sm:max-w-lg">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-left sm:text-left">
          We Provide You The Best <br /> Srilankan Sightseeing Tours
        </h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-left sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Smooth scrolling to Packages section */}
        <a
          href="Packages"
          className="bg-[#DF6951] text-white px-4 py-2 rounded-full hover:bg-[#D56C4C] transition duration-300 mt-4 inline-block"
        >
          View Packages
        </a>
      </div>

      {/* Right center image */}
      <div className="absolute top-[calc(100%+1rem)] sm:top-[45%] right-2 sm:right-4 transform -translate-y-0 sm:translate-y-0">
        <img src={rightImage} alt="Right Image" className="w-30 sm:w-30 h-auto" />
      </div>
    </div>
  );
}
