"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number; // en millisecondes
  aspectRatio?: string; // ex: "aspect-[97/60]"
}

const ImageCarousel = ({ 
  images, 
  autoPlayInterval = 5000,
  aspectRatio = "aspect-[97/60]"
}: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Changement automatique d'image
  useEffect(() => {
    if (images.length <= 1) return; // Pas de carrousel si une seule image

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  // Navigation manuelle
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Si une seule image, affichage simple sans carrousel
  if (images.length === 1) {
    return (
      <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-md`}>
        <Image
          src={images[0]}
          alt="Image"
          fill
          className="object-cover object-center"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatio} w-full overflow-hidden rounded-md`}>
      <motion.div
        key={currentImageIndex}
        variants={{
          hidden: {
            opacity: 0,
            x: -20,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.5 }}
        className="relative w-full h-full"
      >
        <Image
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          fill
          className="object-cover object-center"
        />
      </motion.div>

      {/* Boutons de navigation */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Image précédente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
        aria-label="Image suivante"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicateurs de points */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentImageIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;