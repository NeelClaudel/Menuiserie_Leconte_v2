import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { motorisationData } from "@/data/services/motorisation";

export const metadata: Metadata = {
  title: motorisationData.metadata.title,
  description: motorisationData.metadata.description,
};

const MotorisationPage = () => {
  return <ServicePageLayout data={motorisationData} />;
};

export default MotorisationPage;