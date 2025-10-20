import React from "react";
import SectionHeader from "../Common/SectionHeader";
import ProductItem from "./productItem";
import ProductData from "./productData";

const Product = async () => {
  return (
    <section id="product" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NOS REALISATIONS`,
              subtitle: `Découvrez Nos Dernières Réalisations`,
              description: `Portails, terrasses, pergolas, volets roulants : explorez nos projets récents dans le Morbihan. Chaque réalisation témoigne de notre savoir-faire artisanal et de notre engagement qualité auprès de nos clients à Belz, Auray, Carnac et environs.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {ProductData.slice(0, 3).map((product, key) => (
            <ProductItem product={product} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
