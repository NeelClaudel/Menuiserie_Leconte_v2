import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { terrassePergolaData } from "@/data/services/terrasse_pergola";

export const metadata: Metadata = {
  title: terrassePergolaData.metadata.title,
  description: terrassePergolaData.metadata.description,
};

const TerrassePergolaPage = () => {
  return <ServicePageLayout data={terrassePergolaData} />;
};

export default TerrassePergolaPage;