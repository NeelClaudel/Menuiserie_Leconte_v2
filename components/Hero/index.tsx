"use client";
import Image from "next/image";
import { useState } from "react";
import ImageCarousel from "@/components/ImageCarousel/imageCarousel";

const Hero = () => {
  const [email, setEmail] = useState("");

  const heroImages = [
    "/images/photodavy/fenetres_01.jpg",
    "/images/photodavy/fenetres_04.jpg",
    "/images/photodavy/fenetres_03.jpg",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pt-35 pb-20 md:pt-40 xl:pt-46 xl:pb-25 bg-light_bg dark:bg-dark_bg">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full md:w-1/2 bg-white/95 dark:bg-black/95 backdrop-blur-md p-8 rounded-2xl shadow-solid-8">
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-white text-sm font-medium">
                Artisan Menuisier à Belz (56)
              </span>
              
              <h1 className="xl:text-hero mb-6 text-3xl font-bold text-black dark:text-primary leading-tight">
                Menuiserie extérieure{" "}
                <span className="before:bg-titlebg dark:before:bg-titlebgdark relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full">
                  sur mesure
                </span>
                {" "}dans le Morbihan
              </h1>
              
              <p className="mb-6 text-base leading-relaxed text-waterloo dark:text-manatee">
                Spécialiste des projets sur mesure : fenêtres, baie vitrées, portails, volets roulants, portes de garage, 
                terrasses et pergolas. Motorisations connectées et interphonie.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white text-sm mb-1">
                      Intervention rapide
                    </h3>
                    <p className="text-xs text-waterloo dark:text-manatee">
                      Dépannage sous 48h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white text-sm mb-1">
                      Devis gratuit
                    </h3>
                    <p className="text-xs text-waterloo dark:text-manatee">
                      Sans engagement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white text-sm mb-1">
                      Morbihan Sud
                    </h3>
                    <p className="text-xs text-waterloo dark:text-manatee">
                      Belz, Auray, Carnac, Quiberon...
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white text-sm mb-1">
                      Sur mesure
                    </h3>
                    <p className="text-xs text-waterloo dark:text-manatee">
                      Projets personnalisés
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#support"
                  className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black transition-all"
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
                
                <a
                  href="tel:+33603748377"
                  className="inline-flex items-center gap-2.5 rounded-full border-2 border-stroke dark:border-strokedark px-6 py-3 font-medium text-black dark:text-white hover:bg-stroke dark:hover:bg-strokedark transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Appeler
                </a>
              </div>
            </div>

            <div className="animate_right w-full md:w-1/2 mt-10 lg:mt-0 duration-500 hover:scale-105">
              <div className="relative 2xl:-mr-7.5">
                <ImageCarousel 
                  images={heroImages}
                  autoPlayInterval={5000}
                  aspectRatio="aspect-[700/444]"
                  enableHoverZoom={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;