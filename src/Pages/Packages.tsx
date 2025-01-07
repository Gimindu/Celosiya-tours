import { useNavigate } from "react-router-dom";
import packageBackground from "@/assets/images/package_bg.png";
import packageex from "@/assets/images/packageex.png";

export default function Packages() {
  const navigate = useNavigate(); // Initialize navigation hook

  const packages = [
    {
      title: ' Ella',
      description: 'Ella offers stunning hill views and tranquility. Visit Mini Adam\'s Peak, Nine Arches Bridge, and Ravana Falls. Enjoy tea plantations, an Ayurvedic garden, and a scenic train ride.',
      details: ['5 Days', '4 Nights', 'Breakfast', 'Transportation'],
    },
    {
      title: 'Sigiriya',
      description: 'Discover the UNESCO-listed Sigiriya Rock Fortress, Pidurangala, Dambulla Cave Temple, and Minneriya National Park. Experience local culture with a village safari.  ',
      details: ['7 Days', '6 Nights', 'All Meals', 'Guided Tours'],
    },
    {
      title: 'Kandy ',
      description: 'Explore Kandy’s Temple of the Tooth Relic, Royal Botanical Gardens, and traditional craftsmanship. Enjoy panoramic views, a dancing show, and an elephant ride.  ',
      details: ['4 Days', '3 Nights', 'Local Cuisine', 'Private Guide'],
    },
    {
      title: 'Nuwara Eliya  ',
      description: 'Known as "Little England," it features tea factories, Haggala Botanical Gardens, and the colonial-era Nuwara Eliya Post Office.  ',
      details: ['10 Days', '9 Nights', 'Gourmet Dining', 'VIP Transportation'],
    },
  ];

  return (
    <div
      id="packages"
      style={{
        backgroundImage: `url(${packageBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex flex-col items-center py-16 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Header Section */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center mb-8 mt-8">
        What You Can Visit With Us
      </h1>

      {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
        {packages.map((pkg, index) => (
          <div
            className="max-w-full w-full flex flex-col lg:flex-row bg-white/30 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
            key={index}
          >
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover"
              style={{ backgroundImage: `url(${packageex})` }}
              title="Package Image"
            ></div>
            <div className="p-6 flex flex-col justify-between">
              <div className="mb-4">
                <h2 className="text-white font-bold text-lg md:text-xl mb-2">
                  {pkg.title}
                </h2>
                <p className="text-white text-sm md:text-base">
                  {pkg.description}
                </p>
              </div>
              <ul className="text-white text-sm list-inside mb-4">
                {pkg.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>• {detail}</li>
                ))}
              </ul>
              <button className="bg-[#DF6951] text-white px-4 py-2 w-full rounded-full hover:bg-[#D56C4C] transition duration-300">
                Contact for More details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="mt-12">
        <button
          className="bg-[#DF6951] text-white px-6 py-2 rounded-full hover:bg-[#D56C4C] transition duration-300"
          onClick={() => navigate("/all_packages")}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
