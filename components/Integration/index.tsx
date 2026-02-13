"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import { headerData, integrationItems, IntegrationItem } from "./integrationData";

const fadeInVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

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

        <div className="flex flex-wrap justify-around gap-y-10">
          {integrationItems.map((item, index) => (
            <IntegrationItemRenderer key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const IntegrationItemRenderer = ({ item }: { item: IntegrationItem }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: 0.1 }}
      viewport={{ once: true }}
      className="animate_top w-1/3 md:w-1/4 xl:w-1/6"
    >
      {item.type === "brand" && (
        <div className="shadow-solid-7 inline-block rounded-[10px] bg-[#4e8fd3] p-4.5">
          <Image width={125} height={125} src={item.src} alt={item.alt} />
        </div>
      )}
      {item.type === "dot" && (
        <div
          className="rounded-full"
          style={{
            width: item.size,
            height: item.size,
            backgroundColor: item.color,
          }}
        />
      )}
    </motion.div>
  );
};

export default Integration;