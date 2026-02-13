"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <>
      <section 
        ref={sectionRef}
        className="relative min-h-screen overflow-hidden"
      >
        <motion.div 
          style={{ opacity, y }}
          className="absolute inset-0 z-0 -top-[15%] h-[115%]"
        >
          <Image
            src="/images/photodavy/fenetres_01.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </motion.div>

        <div className="relative z-10 min-h-screen flex items-center py-20 lg:py-25 xl:py-30">
          <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 w-full">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_left w-full md:w-1/2 bg-white/95 dark:bg-black/95 backdrop-blur-md p-8 rounded-2xl shadow-solid-8"
            >
              <span className="font-medium uppercase text-black dark:text-primary">
                Nos Prestations en Menuiserie Extérieure
              </span>
              
              <p className="mt-4 text-black dark:text-white">
                Découvrez notre expertise en menuiserie extérieure sur mesure dans le Morbihan.
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Portails & Clôtures
                  </h3>
                  <p className="text-black dark:text-white">
                    Installation et motorisation de portails sur mesure.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Ouvertures Portes, Fenêtres & Baie Vitrées
                  </h3>
                  <p className="text-black dark:text-white">
                    Création, pose et dépannage de vos menuiseries et ouvertures, volets roulants motorisés.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    03
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Terrasses & Pergolas
                  </h3>
                  <p className="text-black dark:text-white">
                    Création d'espaces extérieurs sur mesure en bois et aluminium.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    04
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Porte de garage & Carport
                  </h3>
                  <p className="text-black dark:text-white">
                    Création de portes de garage motorisés et carports sur mesure en bois et aluminium.
                  </p>
                </div>
              </div>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    05
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Interphonie & sécurité
                  </h3>
                  <p className="text-black dark:text-white">
                    Installation de systèmes d'interphonie et de sécurité pour protéger votre domicile.
                  </p>
                </div>
              </div>
              
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection bg-white/80">
                  <p className="text-metatitle2 font-semibold text-black dark:text-white">
                    06
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-black dark:text-primary">
                    Projet sur mesure
                  </h3>
                  <p className="text-black dark:text-white">
                    Contactez nous pour discuter de votre projet personnalisé.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="animate_right w-full md:w-1/2"
            >
              <div className="bg-white/95 dark:bg-black/95 backdrop-blur-md p-8 rounded-2xl shadow-solid-8">
                <h4 className="font-medium uppercase text-black dark:text-primary">
                  Dépannage Rapide
                </h4>
                <p className="mt-4 text-black dark:text-white">
                  Intervention d'urgence sous 48h pour tous vos équipements de menuiserie extérieure.
                </p>
                <div>
                  <a
                    href="/support"
                    className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span className="duration-300 group-hover:pr-2">
                      Prendre Rendez-Vous
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            </div>
          </div>
        </div>
      </section>
      <br></br>
    </>
  );
};

export default About;