import packageBackground from '@/assets/images/package_bg.png';
import packageex from '@/assets/images/packageex.png';

export default function AllPackages() {
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
    {
      title: 'Yala National Park',
      description: 'Spot leopards, elephants, and exotic wildlife on an exhilarating safari in Yala National Park. Visit the ancient Sithulpawwa Rock Temple and the Kataragama Temple.  ',
      details: ['5 Days', '4 Nights', 'Breakfast', 'Transportation'],
    },
    {
      title: 'Trincomalee',
      description: 'Trincomalee offers culture and coastal beauty with Thirukeshwaram Temple, Marble Beach, Nilaveli Beach, and Pigeon Island.  ',
      details: ['7 Days', '6 Nights', 'All Meals', 'Guided Tours'],
    },
    {
      title: 'Udawalawa National Park',
      description: 'Visit Udawalawa National Park to see elephants, crocodiles, and birds. Explore the Elephant Transit Home and the Sankapala Raja Maha Viharaya Temple.  ',
      details: ['4 Days', '3 Nights', 'Local Cuisine', 'Private Guide'],
    },
    {
      title: 'Colombo  ',
      description: 'Colombo combines history and modernity with landmarks like Gangaramaya Temple, Galle Face, the National Museum, and vibrant city tours.  ',
      details: ['10 Days', '9 Nights', 'Gourmet Dining', 'VIP Transportation'],
    },
    {
      title: 'Galle ',
      description: 'Galle boasts historic charm with its Fort, lighthouse, turtle farms, antique shops, and stunning beaches like Unawatuna.',
      details: ['5 Days', '4 Nights', 'Breakfast', 'Transportation'],
    },
    {
      title: 'Anuradhapura  ',
      description: 'Explore ancient ruins, the Ranmasu Uyana Stargate, and the serene Isurumuniya Temple in this historical capital.  ',
      details: ['7 Days', '6 Nights', 'All Meals', 'Guided Tours'],
    },
    {
      title: ' Polonnaruwa  ',
      description: 'Discover Polonnaruwa’s ancient city and serene Parakrama Samudraya Lake, showcasing Sri Lanka’s royal history.  ',
      details: ['4 Days', '3 Nights', 'Local Cuisine', 'Private Guide'],
    },
    {
      title: 'Kalutara ',
      description: 'Kalutara features sacred sites, scenic falls, the Sinharaja Rainforest, and vibrant river safaris.',
      details: ['10 Days', '9 Nights', 'Gourmet Dining', 'VIP Transportation'],
    },
    {
      title: ' Mirissa ',
      description: 'Mirissa offers whale watching, surfing, and beach relaxation. Visit the Weligama fishing village and the iconic Parrot Rock.  ',
      details: ['10 Days', '9 Nights', 'Gourmet Dining', 'VIP Transportation'],
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${packageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <div
        id="AllPackages"
        className="relative flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-4xl text-white font-bold absolute mt-24 md:mt-24 lg:mt-28">
          All Packages
        </h1>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-8 gap-8 mt-56">
          {packages.map((pkg, index) => (
            <div className="max-w-sm w-full lg:max-w-full lg:flex relative" key={index}>
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                style={{ backgroundImage: `url(${packageex})` }}
                title="Package Image"
              ></div>
              <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white/30 backdrop-blur-lg rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-white font-bold text-xl mb-2">{pkg.title}</div>
                  <p className="text-white text-base">{pkg.description}</p>
                </div>
                {/* <div className="flex items-center">
                  <ul className="text-white text-sm list-inside">
                    {pkg.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>• {detail}</li>
                    ))}
                  </ul>
                </div> */}
                <button className="bg-[#DF6951] text-white px-4 py-2 absolute bottom-4 right-4 w-54 rounded-full hover:bg-[#D56C4C] transition duration-300">
                  Contact for More details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
