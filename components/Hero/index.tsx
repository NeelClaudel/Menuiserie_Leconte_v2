"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Liste des images pour le carrousel
  const images = [
    "/images/img_custom/terrasse_01.jpg",
    "/images/img_custom/terrasse_02.jpg",
    "/images/img_custom/window_01.jpg",
    // Ajoutez autant d'images que vous voulez
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Changement automatique d'image toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5000ms = 5 secondes

    return () => clearInterval(interval); // Nettoyage à la destruction du composant
  }, [images.length]);

  // Fonction pour aller à une image spécifique
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Fonctions pour navigation manuelle
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

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25 bg-light_bg dark:bg-dark_bg">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-[#915d38] dark:text-[#e5e0d5]">
                Menuiserie Leconte
              </h4>
              <h1 className="xl:text-hero mb-5 pr-16 text-3xl font-bold text-black dark:text-white">
                Votre Artisan Menuisier à Belz - Morbihan (56) {"   "}
                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full"></span>
              </h1>
              <p>
                Menuiserie Leconte, artisan menuisier établi à Belz dans le Morbihan (56), 
                réalise vos projets sur mesure : portes de garage, portails, volets roulants, 
                terrasses en bois, pergolas et stores bannes. Motorisations connectées, 
                interphonie et création d'ouvertures. Intervention rapide sur Belz, Ria d'Etel, 
                Erdeven, Plouhinec, Auray, Carnac, Quiberon, Lorient et Vannes.
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <a
                      href="#support"
                      className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                    >
                      Prendre Contact
                      <Image
                        width={20}
                        height={20}
                        src="/images/icon/icon-arrow-dark.svg"
                        alt="Arrow"
                        className="dark:hidden"
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/images/icon/icon-arrow-light.svg"
                        alt="Arrow"
                        className="hidden dark:block"
                      />
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right w-full md:w-1/2 mt-10 lg:mt-0">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full overflow-hidden rounded-3xl shadow-2xl">
                  <motion.div
                    key={currentImageIndex} // Force la réanimation à chaque changement
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
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      src={images[currentImageIndex]}
                      alt={`Hero image ${currentImageIndex + 1}`}
                      fill
                      priority
                    />
                  </motion.div>

                  {/* Boutons de navigation */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Image précédente"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    aria-label="Image suivante"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Indicateurs de points */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;