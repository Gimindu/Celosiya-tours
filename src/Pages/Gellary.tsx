import { useState } from "react";

export default function Gallery() {
  const backgroundImage = "url(/Gallery/pexels-tomas-malik-793526-1998434.avif)";
  const divStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const galleryData = [
    { id: 1, title: "National Parks", imageUrl: "/Gallery/elephants-4864736.avif" },
    { id: 2, title: "nine arch bridge", imageUrl: "/Gallery/nine-arch-bridge-5657721.avif" },
    { id: 3, title: "Sigiri", imageUrl: "/Gallery/sigiriya-459197.avif" },
    { id: 4, title: "Mirissa", imageUrl: "/Gallery/sri-lanka-4580991.avif" },
    { id: 5, title: "Mahabodhi Temple", imageUrl: "/Gallery/stairs-3209618.avif" },
    { id: 6, title: "Charminar", imageUrl: "/Gallery/sri-lanka-4580991.avif" },
    { id: 7, title: "Beautiful Beach side", imageUrl: "/Gallery/a.avif" },
    { id: 8, title: "Religious places", imageUrl: "/Gallery/b.avif" },
    { id: 9, title: "Incredible architecture", imageUrl: "/Gallery/c.avif" },
    { id: 10, title: "lotus tower", imageUrl: "/Gallery/d.avif" },
    { id: 11, title: "Temple of the tooth", imageUrl: "/Gallery/e.avif" },
    { id: 12, title: "Surfing", imageUrl: "/Gallery/h.avif" },
  ];

  const [selectedImage, setSelectedImage] = useState(galleryData[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(galleryData.length / itemsPerPage);

  const currentImages = galleryData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div id="gallery" className="p-6 bg-gray-100" style={divStyle}>
      <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-6 md:p-10 w-[90%] max-w-4xl mt-10 md:mt-20 mb-10 mx-auto">
        {/* Header Section */}
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-3">
          Our Gallery
        </h1>

        {/* Detailed View with Paginated Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side: Selected Image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-xs">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-48 md:h-96 object-cover"
              />
              <div className="p-4 bg-white text-center bg-opacity-50">
                <h2 className="text-sm md:text-xl font-bold">
                  {selectedImage.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side: Paginated Grid */}
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
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  <h3 className="text-xs sm:text-sm font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center mt-6 space-x-2">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={`px-3 py-2 text-xs md:text-sm rounded-lg border ${
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
