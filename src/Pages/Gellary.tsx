import { useState } from 'react';

export default function Gallery() {
  // Define an array of gallery items
  const galleryData = [
    { id: 2, title: 'Image B', description: 'Discover the charm of B', imageUrl: '/images/d.jpg' },
    { id: 2, title: 'Image B', description: 'Discover the charm of B', imageUrl: '/images/b.jpg' },
    { id: 3, title: 'Image C', description: 'Experience the vibe of C', imageUrl: '/images/c.jpg' },
    { id: 1, title: 'Image A', description: 'Explore the beauty of A', imageUrl: '/images/a.jpg' },
    { id: 1, title: 'Image A', description: 'Explore the beauty of A', imageUrl: '/images/e.jpg' },
    { id: 3, title: 'Image C', description: 'Experience the vibe of C', imageUrl: '/images/g.jpg' },
    { id: 2, title: 'Image B', description: 'Discover the charm of B', imageUrl: '/images/h.jpg' },
    { id: 1, title: 'Image A', description: 'Explore the beauty of A', imageUrl: '/images/i.jpg' },
    { id: 3, title: 'Image C', description: 'Experience the vibe of C', imageUrl: '/images/k.jpg' },
  ];

  // State to track whether more images should be displayed
  const [showMore, setShowMore] = useState(false);

  // Function to toggle showing more images
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Display the first 6 images or all images based on showMore
  const displayedImages = showMore ? galleryData : galleryData.slice(0, 6);

  return (
    <div id="gallery" className="p-6 bg-cover bg-center" style={{ backgroundImage: "url('/images/backg.jpg')" }}>
      <h1 className="text-5xl text-white font-bold text-center mb-12">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedImages.map((item, index) => (
          <div
            key={item.id}
            className={`relative group rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105
                        ${index % 3 === 0 ? "col-span-2 row-span-2" : ""}
                        ${index % 2 === 0 ? "col-span-1" : ""}`}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-lg">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* "More" button to toggle visibility of additional images */}
      <div className="text-center mt-8">
        <button
          onClick={toggleShowMore}
          className="font-bold py-2 px-6 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:shadow-outline"
        >
          {showMore ? "Show Less" : "More"}
        </button>
      </div>
    </div>
  );
}
