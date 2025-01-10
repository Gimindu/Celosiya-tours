// src/components/ImageWithBlurHash.tsx
import { useState } from "react";
import { Blurhash } from "react-blurhash";

interface ImageWithBlurHashProps {
  src: string;
  alt: string;
  blurHash: string;
}

const ImageWithBlurHash: React.FC<ImageWithBlurHashProps> = ({ src, alt, blurHash }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="shadow-lg rounded-lg group">
      {!imageLoaded && (
        <Blurhash
          hash={blurHash}
          width={"100%"}
          height={150}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-40 sm:h-56 md:h-64 lg:h-72 object-cover transform transition-transform duration-300 group-hover:scale-105 ${
          imageLoaded ? "" : "hidden"
        }`}
      />
    </div>
  );
};

export default ImageWithBlurHash;
