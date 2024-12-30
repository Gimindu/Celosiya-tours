// import { useState } from 'react';
// import packageBackground from '@/assets/images/package_bg.png';
// import packageex from '@/assets/images/packageex.png';

// export default function Packages() {
//   const [showMore, setShowMore] = useState(false);

//   const packages = [
//     {
//       title: 'Explore Beautiful Destinations',
//       description: 'Join us on an unforgettable journey to explore stunning locations with exceptional services and experiences designed just for you.',
//       details: ['5 Days', '4 Nights', 'Breakfast', 'Transportation'],
//     },
//     {
//       title: 'Adventure Awaits You',
//       description: 'Discover the world\'s most exciting destinations with all-inclusive packages, designed to bring you adventure and relaxation.',
//       details: ['7 Days', '6 Nights', 'All Meals', 'Guided Tours'],
//     },
//     {
//       title: 'Uncover Hidden Gems',
//       description: 'Let us guide you to destinations off the beaten path, where you\'ll find beauty, culture, and excitement at every corner.',
//       details: ['4 Days', '3 Nights', 'Local Cuisine', 'Private Guide'],
//     },
//     {
//       title: 'Luxury Travel Experience',
//       description: 'Indulge in luxury with our exclusive packages that offer world-class experiences, comfort, and personalized services.',
//       details: ['10 Days', '9 Nights', 'Gourmet Dining', 'VIP Transportation'],
//     },
//     {
//       title: 'Cultural Immersion',
//       description: 'Experience the rich culture and traditions of unique destinations with carefully curated activities.',
//       details: ['6 Days', '5 Nights', 'Cultural Tours', 'Local Guides'],
//     },
//     {
//       title: 'Wildlife Safaris',
//       description: 'Get up close with nature and wildlife in their natural habitats with our thrilling safari packages.',
//       details: ['5 Days', '4 Nights', 'Safari Rides', 'Luxury Lodging'],
//     },
//   ];

//   const displayedPackages = showMore ? packages : packages.slice(0, 4);

//   return (
//     <div
//       id="Packages"
      
//       style={{
//         backgroundImage: `url(${packageBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//       className="relative md:h-screen flex flex-col items-center"     
//       // md:h-screen eka thiye nisa thama show less eka penne naththe eka ain karama hight eka awul yanawa poddak balanna eka
//     >
//       <h1 className="text-3xl md:text-4xl text-white font-bold absolute mt-24 md:mt-24 lg:mt-28 ">
//         What You Can Visit With Us
//       </h1>

//       {/* Card Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-8 gap-8 mt-56 ">
//         {displayedPackages.map((pkg, index) => (
//           <div className="max-w-sm w-full lg:max-w-full lg:flex relative" key={index}>
//             <div
//               className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
//               style={{ backgroundImage: `url(${packageex})` }}
//               title="Package Image"
//             ></div>
//             <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white/30 backdrop-blur-lg rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//               <div className="mb-8">
//                 <div className="text-white font-bold text-xl mb-2">{pkg.title}</div>
//                 <p className="text-white text-base">{pkg.description}</p>
//               </div>
//               <div className="flex items-center">
//                 <ul className="text-white text-sm list-inside">
//                   {pkg.details.map((detail, detailIndex) => (
//                     <li key={detailIndex}>• {detail}</li>
//                   ))}
//                 </ul>
//               </div>
//               <button className="bg-[#DF6951] text-white px-4 py-2 absolute bottom-4 right-4 w-54 rounded-full hover:bg-[#D56C4C] transition duration-300">
//                 Contact for More details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* More/Less Button */}
//       <div className="mt-6">
//         <button
//           className="bg-[#DF6951] text-white px-6 py-2 rounded-full hover:bg-[#D56C4C] transition duration-300 mb-10"
//           onClick={() => setShowMore(!showMore)}
//         >
//           {showMore ? 'Show Less' : 'View More Packages'}
//         </button>
//       </div>
//     </div>
//   );
// }
