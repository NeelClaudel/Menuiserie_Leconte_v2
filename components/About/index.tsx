"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { aboutIntro, aboutItems, aboutCta } from "./aboutData";

const bentoSpans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.15 + i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      <section
        id="about"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.015, transition: { duration: 0.25 } }}
                className="md:col-span-2 bg-[#e5e0d5]/80 dark:bg-[#1c2136]/80 backdrop-blur-sm p-8 rounded-2xl border border-white/20 dark:border-strokedark/60 shadow-solid-8"
              >
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {aboutIntro.label}
                </span>
                <p className="mt-3 text-xl md:text-2xl font-medium leading-relaxed text-black dark:text-white max-w-lg">
                  {aboutIntro.subtitle}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
                className="md:col-span-1 bg-[#e5e0d5]/80 dark:bg-[#1c2136]/80 backdrop-blur-sm p-8 rounded-2xl border border-primary/30 shadow-solid-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {aboutCta.label}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-black dark:text-white">
                    {aboutCta.description}
                  </p>
                </div>
                <a
                  href={aboutCta.linkHref}
                  className="group mt-6 inline-flex items-center gap-2.5 text-primary font-medium"
                >
                  <span className="duration-300 group-hover:pr-2">
                    {aboutCta.linkText}
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
              </motion.div>

              {aboutItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    y: -4,
                    transition: { duration: 0.25, ease: "easeOut" },
                  }}
                  className={`${bentoSpans[index]} bg-[#e5e0d5]/80 dark:bg-[#1c2136]/80 backdrop-blur-sm p-7 rounded-2xl border border-white/20 dark:border-strokedark/60 shadow-solid-8 cursor-default`}
                >
                  <h3 className="text-base font-semibold text-black dark:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/70 dark:text-manatee">
                    {item.description}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>
      <br></br>
    </>
  );
};

export default About;