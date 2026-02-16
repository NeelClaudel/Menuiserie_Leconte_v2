"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { headerData, integrationItems, IntegrationItem } from "./integrationData";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.1 + i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const brandItems = integrationItems.filter((item) => item.type === "brand");

const Integration = () => {
  return (
    <section>
      <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: headerData.title,
            subtitle: headerData.subtitle,
            description: headerData.description,
          }}
        />
      </div>

      <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 max-w-c-1154 relative z-50 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -top-3/4 right-0 left-0 -z-1 mx-auto h-full w-full">
          <Image
            width={1200}
            height={400}
            sizes="(max-width: 768px) 100vw"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted"
            className="dark:hidden"
            style={{ position: "static" }}
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>

        <div className="hidden md:flex flex-wrap justify-around gap-y-10">
          {integrationItems.map((item, index) => (
            <DesktopItem key={index} item={item} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 md:hidden">
          {brandItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              className="flex items-center justify-center"
            >
              <div className="shadow-solid-7 rounded-[10px] bg-[#4e8fd3] p-4">
                <Image width={110} height={110} src={item.src} alt={item.alt} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DesktopItem = ({ item, index }: { item: IntegrationItem; index: number }) => {
  if (item.type === "empty") {
    return <div className="w-1/4 xl:w-1/6" />;
  }

  if (item.type === "dot") {
    return (
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-1/4 xl:w-1/6"
      >
        <div
          className="rounded-full"
          style={{
            width: item.size,
            height: item.size,
            backgroundColor: item.color,
          }}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{
        scale: 1.08,
        y: -6,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="w-1/4 xl:w-1/6"
    >
      <div className="shadow-solid-7 inline-block rounded-[10px] bg-[#4e8fd3] p-4.5 cursor-default">
        <Image width={125} height={125} src={item.src} alt={item.alt} />
      </div>
    </motion.div>
  );
};

export default Integration;