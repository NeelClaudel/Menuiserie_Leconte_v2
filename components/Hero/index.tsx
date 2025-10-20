"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
                    {/*<input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="border-stroke shadow-solid-2 focus:border-primary dark:border-strokedark dark:focus:border-primary rounded-full border px-6 py-2.5 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />*/}
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

                {/*<p className="mt-5 text-[#173c44] dark:text-white">
                  Devis gratuit sur mesure.
                </p>*/}
              </div>
            </div>

            <div className="animate_right w-full md:w-1/2 mt-10 lg:mt-0">
              <div className="relative 2xl:-mr-7.5">

                <div className="relative aspect-[700/444] w-full overflow-hidden rounded-3xl shadow-2xl">
                      <motion.div
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
                    whileInView="visible"
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="animate_left relative w-full h-full"
                  >
                  <Image
                    className="object-cover transition-transform duration-500 hover:scale-105 dark:hidden"
                    src="/images/img_custom/terrasse_01.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden object-cover transition-transform duration-500 hover:scale-105 dark:block"
                    src="/images/img_custom/terrasse_01.jpg"
                    alt="Hero"
                    fill
                  />
                  </motion.div>
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