import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GalleryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);

  // Using high-res placeholder images for better "full-width" visuals
  const images = [
    "/gallery/gallery1.png",
    "/gallery/gallery2.png",
    "/gallery/gallery3.png",
    "/gallery/gallery4.png",
    "/gallery/gallery5.png",
    "/gallery/gallery6.png",
    "/gallery/gallery7.png",
    "/gallery/gallery8.png",
  ];

  // Memoize handlers to prevent stale closures if used in effects
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Autoplay Setup
  useEffect(() => {
    autoplayRef.current = setInterval(handleNext, 4000); // 4 seconds is smoother for large images
    return () => clearInterval(autoplayRef.current);
  }, [handleNext]);

  const pauseAutoplay = () => clearInterval(autoplayRef.current);
  
  const resumeAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(handleNext, 2000);
  };

  return (
    <section 
      className="py-12 bg-[#FFFBF0] w-full" 
      onMouseEnter={pauseAutoplay} 
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4 mb-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
          Project Gallery
        </h2>
        <p className="text-gray-500 text-lg font-light">
          Explore our latest industrial innovations and design breakthroughs.
        </p>
      </div>

      {/* Full Width Image Container 
        - On Mobile: Fixed height (h-64 to h-96)
        - On PC: h-[600px] or h-[70vh] for that immersive feel
      */}
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] overflow-hidden group">
        
        {/* Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === activeIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105" // Subtle zoom effect on exit
            }`}
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Minimal Gradient for text readability if you add captions later */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
          </div>
        ))}

        {/* Navigation Buttons (Absolute Positioned) */}
        {/* Left Arrow */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 md:-translate-x-10 md:group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg hover:bg-white hover:text-black transition-all duration-300 md:translate-x-10 md:group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Pagination Dots (Bottom Center) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "bg-white w-4" 
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryCarousel;