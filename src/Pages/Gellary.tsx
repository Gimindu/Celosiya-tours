import { useState } from "react";

export default function Gallery() {

  const backgroundImage = 'url(/images/pexels-tomas-malik-793526-1998434.jpg)';

  const divStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover', // Adjusts the image to cover the whole area
    backgroundPosition: 'center', // Centers the image
    height: '100vh' // Set height to cover the full viewport height
  };

  const galleryData = [
    { id: 1, title: "Hampi Temple", imageUrl: "/images/elephants-4864736.jpg" },
    { id: 2, title: "Golden Temple", imageUrl: "/images/nine-arch-bridge-5657721.jpg" },
    { id: 3, title: "Konarak Sun Temple", imageUrl: "/images/sigiriya-459197.jpg" },
    { id: 4, title: "Gwalior Fort", imageUrl: "/images/sri-lanka-4580991.jpg" },
    { id: 5, title: "Mahabodhi Temple", imageUrl: "/images/stairs-3209618.jpg" },
    { id: 6, title: "Charminar", imageUrl: "/images/sri-lanka-4580991.jpg" },
    { id: 7, title: "Red Fort", imageUrl: "/images/a.jpg" },
    { id: 8, title: "Taj Mahal", imageUrl: "/images/b.jpg" },
    { id: 9, title: "Qutub Minar", imageUrl: "/images/c.jpg" },
    { id: 10, title: "Victoria Memorial", imageUrl: "/images/d.jpg" },
    { id: 11, title: "Gateway of India", imageUrl: "/images/e.jpg" },
    { id: 12, title: "Lotus Temple", imageUrl: "/images/h.jpg" },
  ];

  // State for selected image
  const [selectedImage, setSelectedImage] = useState(galleryData[0]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of images per page

  // Calculate total pages
  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  // Get images for the current page
  const currentImages = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Function to handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div  id="gallery" className="p-6 bg-gray-100" style={divStyle}>
<div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-10 w-[90%] max-w-4xl mt-20 mb-10 mx-auto justify-center">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center">
        Our Gallery
        </h1>
        <p className="mb-8 text-white font-bold text-center">
        Explore the beauty of Sri Lanka through our gallery. Click on an image to see it in detail, and browse through to discover more stunning destinations.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side: Selected Image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4 bg-white text-center bg-opacity-50">
                <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              </div>
            </div>
          </div>

          {/* Right Side: Image Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto max-h-[500px]">
            {currentImages.map((item) => (
              <div
                key={item.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md ${
                  selectedImage.id === item.id ? "ring-4 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-32 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={`px-4 py-2 rounded-lg border ${
                currentPage === pageNumber + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700"
              } hover:bg-blue-300`}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
        </div>
        
    </div>
  );
}
