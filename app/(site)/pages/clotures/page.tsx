import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { cloturesData } from "@/data/services/clotures";

export const metadata: Metadata = {
  title: cloturesData.metadata.title,
  description: cloturesData.metadata.description,
};

const CloturesPage = () => {
  return <ServicePageLayout data={cloturesData} />;
};

export default CloturesPage;