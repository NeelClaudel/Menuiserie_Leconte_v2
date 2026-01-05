import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { carportData } from "@/data/services/carport";

export const metadata: Metadata = {
  title: carportData.metadata.title,
  description: carportData.metadata.description,
};

const CarportPage = () => {
  return <ServicePageLayout data={carportData} />;
};

export default CarportPage;