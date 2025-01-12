import { useState } from "react";

export default function EnhancedGallery() {
  const backgroundImage = "url(/Gallery/pexels-tomas-malik-793526-1998434.avif)";
  const divStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const galleryData = [
    { id: 1, title: "National Parks", imageUrl: "/Gallery/elephants-4864736.avif" },
    { id: 2, title: "Nine Arch Bridge", imageUrl: "/Gallery/nine-arch-bridge-5657721.avif" },
    { id: 3, title: "Sigiriya", imageUrl: "/Gallery/sigiriya-459197.avif" },
    { id: 4, title: "Mirissa", imageUrl: "/Gallery/sri-lanka-4580991.avif" },
    { id: 5, title: "Ancient Architecture", imageUrl: "/Gallery/stairs-3209618.avif" },
    { id: 6, title: "Charminar", imageUrl: "/Gallery/sri-lanka-4580991.avif" },
    { id: 7, title: "Beautiful Beachside", imageUrl: "/Gallery/a.avif" },
    { id: 8, title: "Religious Places", imageUrl: "/Gallery/b.avif" },
    { id: 9, title: "Incredible Architecture", imageUrl: "/Gallery/c.avif" },
    { id: 10, title: "Lotus Tower", imageUrl: "/Gallery/d.avif" },
    { id: 11, title: "Temple of the Tooth", imageUrl: "/Gallery/e.avif" },
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
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="gallery" className="p-6 bg-gray-100" style={divStyle}>
      <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg rounded-2xl p-6 md:p-10 w-[90%] max-w-4xl mt-24 md:mt-16 mb-10 mx-auto">
        {/* Header Section */}
        <h1 className="text-2xl md:text-4xl text-white font-bold text-center mb-6">
          Our Gallery
        </h1>

        {/* Main Gallery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selected Image */}
          <div className="lg:col-span-1 flex justify-center items-center">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition hover:scale-105">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-white text-center bg-opacity-50">
                <h2 className="text-lg md:text-xl font-bold">{selectedImage.title}</h2>
              </div>
            </div>
          </div>

          {/* Paginated Image Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-6 overflow-y-auto max-h-[500px]">
            {currentImages.map((item) => (
              <div
                key={item.id}
                className={`relative cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition ${
                  selectedImage.id === item.id ? "ring-2 ring-white" : ""
                }`}
                onClick={() => setSelectedImage(item)}
                aria-label={`View details for ${item.title}`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-40 sm:h-52 object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  <h3 className="text-sm sm:text-base font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center mt-6 space-x-3">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber + 1)}
              className={`px-4 py-2 text-sm rounded-lg border ${
                currentPage === pageNumber + 1
                  ? "bg-white text-gray-800 font-semibold"
                  : "bg-transparent text-white border-white hover:bg-white hover:text-gray-800"
              } transition`}
              aria-label={`Go to page ${pageNumber + 1}`}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
