import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { voletsData } from "@/data/services/volets";

export const metadata: Metadata = {
  title: voletsData.metadata.title,
  description: voletsData.metadata.description,
};

const VoletsPage = () => {
  return <ServicePageLayout data={voletsData} />;
};

export default VoletsPage;