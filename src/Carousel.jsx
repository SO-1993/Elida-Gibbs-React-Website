import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

const images = [
  "https://res.cloudinary.com/demo/image/upload/v1652345767/docs/demo_image2.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652366604/docs/demo_image5.jpg",
  "https://res.cloudinary.com/demo/image/upload/v1652345874/docs/demo_image1.jpg",
];

function ImageCarousel() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  function showNextImage() {
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  }

  function showPrevImage() {
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  }

  function goToImage(index) {
    setImageIndex(index);
  }

  return (
    <div className="carousel-container">
      <div className="slide">
        <img
          alt={`Slide ${imageIndex + 1}`}
          src={images[imageIndex]}
          className="carousel-image"
        />
      </div>

      {/* Circles for Image Navigation */}
      <div className="circle-container">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToImage(index)}
            className="circle-icon"
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === imageIndex ? (
              <CircleDot size={16} color="#d35400" />
            ) : (
              <Circle size={16} color="#ddd" />
            )}
          </span>
        ))}
      </div>

      <button className="carousel-button prev" onClick={showPrevImage}>
        <ArrowBigLeft />
      </button>
      <button className="carousel-button next" onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default ImageCarousel;
