"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ServicePageData } from "@/types/servicePage";
import ContactButton from "@/components/ContactButton/ContactButton_index";
import { serviceLinks } from "@/components/Header/menuData";

type Props = {
  data: ServicePageData;
};

const ServicePageLayout = ({ data }: Props) => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
          <Sidebar />
          <MainContent data={data} />
        </div>
      </div>
    </section>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="md:w-1/2 lg:w-[32%]">
      <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Nos Services
        </h4>
        <ul>
          {serviceLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li
                key={link.path}
                className={`mb-3 transition-all duration-300 last:mb-0 ${
                  isActive
                    ? "font-semibold text-primary"
                    : "hover:text-primary"
                }`}
              >
                <a href={link.path}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

const MainContent = ({ data }: Props) => (
  <div className="lg:w-2/3">
    <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
      <h1 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
        {data.title}
      </h1>

      <div className="mb-10 w-full overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={data.mainImage}
            alt={data.mainImageAlt}
            fill
            className="rounded-lg object-cover object-center"
          />
        </div>
      </div>

      <h3 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
        {data.subtitle}
      </h3>

      <div className="blog-details">
        {data.sections.map((section, idx) => (
          <div key={idx}>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
            {section.images && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {section.images.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative aspect-[16/10] w-full overflow-hidden rounded-lg"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
            {section.title && <h3 className="pt-8">{section.title}</h3>}
          </div>
        ))}
      </div>

      <ContactButton />
    </div>
  </div>
);

export default ServicePageLayout;