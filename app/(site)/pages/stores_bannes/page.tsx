import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { storesBannesData } from "@/data/services/stores_bannes";

export const metadata: Metadata = {
  title: storesBannesData.metadata.title,
  description: storesBannesData.metadata.description,
};

const StoresBannesPage = () => {
  return <ServicePageLayout data={storesBannesData} />;
};

export default StoresBannesPage;