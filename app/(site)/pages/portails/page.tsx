import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { portailsData } from "@/data/services/portails";

export const metadata: Metadata = {
  title: portailsData.metadata.title,
  description: portailsData.metadata.description,
};

const PortailsPage = () => {
  return <ServicePageLayout data={portailsData} />;
};

export default PortailsPage;