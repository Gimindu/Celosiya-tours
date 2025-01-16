import React from "react";
import eventBackground from "@/assets/images/background_img/event-background.avif";
import image1 from "@/assets/hotel/21.avif";
import image2 from "@/assets/hotel/17.avif";
import image3 from "@/assets/hotel/7.avif";
import image4 from "@/assets/hotel/4.avif";
import image5 from "@/assets/hotel/13.avif";
import image6 from "@/assets/hotel/15.avif";
import image7 from "@/assets/hotel/20.avif";
import image8 from "@/assets/hotel/11.avif";
import image9 from "@/assets/hotel/23.avif";
import image10 from "@/assets/hotel/24.avif";

import {
  FaBed,
  FaCoffee,
  FaBath,
  FaUtensils,
  FaConciergeBell,
} from "react-icons/fa";

export default function Hotel() {
  const data = [
    { imgelink: image1 },
    { imgelink: image2 },
    { imgelink: image3 },
    { imgelink: image4 },
    { imgelink: image5 },
    { imgelink: image6 },
    { imgelink: image7 },
    { imgelink: image8 },
    { imgelink: image9 },
    { imgelink: image10 },
  ];

  const [active, setActive] = React.useState(data[0].imgelink);

  return (
    <div
      id="room"
      style={{
        backgroundImage: `url(${eventBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8"
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-5 w-full max-w-7xl lg:p-10 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Side: Photos */}
            <div className="grid gap-6">
              <img
                className="w-full h-96 rounded-lg object-cover object-center"
                src={active}
                alt="Featured gallery"
              />
              <div className="grid grid-cols-10 gap-1">
                {data.map(({ imgelink }, index) => (
                  <img
                    key={index}
                    onClick={() => setActive(imgelink)}
                    src={imgelink}
                    className={`h-24 w-24 cursor-pointer rounded-lg object-cover object-center ${
                      active === imgelink ? "border-4 border-blue-500" : ""
                    }`}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Description */}
            <div className="flex flex-col justify-center text-white space-y-6">
              <h2 className="text-2xl md:text-4xl font-extrabold text-center md:text-left">
                Welcome to Our Villa
              </h2>
              <p className="text-sm md:text-base lg:text-xl text-justify">
                Experience the perfect blend of luxury and comfort at our hotel.
                Nestled in the heart of the city, our hotel offers world-class
                amenities, exquisite dining, and stunning views to make your
                stay truly unforgettable.
              </p>
              <ul className="text-sm md:text-base lg:text-xl space-y-4">
                <li className="flex items-center">
                  <FaBed className="mr-3 text-lg md:text-2xl" /> Variety of
                  comfortable rooms
                </li>
                <li className="flex items-center">
                  <FaCoffee className="mr-3 text-lg md:text-2xl" /> Unlimited
                  coffee
                </li>
                <li className="flex items-center">
                  <FaBath className="mr-3 text-lg md:text-2xl" /> Private
                  bathrooms
                </li>
                <li className="flex items-center">
                  <FaUtensils className="mr-3 text-lg md:text-2xl" /> Fully
                  equipped kitchens
                </li>
                <li className="flex items-center">
                  <FaConciergeBell className="mr-3 text-lg md:text-2xl" />{" "}
                  Delicious dining options
                </li>
              </ul>
              <p className="text-sm md:text-base lg:text-xl text-justify">
                Book your stay with us today and discover a world of elegance
                and sophistication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
