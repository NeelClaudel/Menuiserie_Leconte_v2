import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { garageData } from "@/data/services/garage";

export const metadata: Metadata = {
  title: garageData.metadata.title,
  description: garageData.metadata.description,
};

const GaragePage = () => {
  return <ServicePageLayout data={garageData} />;
};

export default GaragePage;