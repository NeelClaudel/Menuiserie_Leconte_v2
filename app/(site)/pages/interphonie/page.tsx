import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { interphonieData } from "@/data/services/interphonie";

export const metadata: Metadata = {
  title: interphonieData.metadata.title,
  description: interphonieData.metadata.description,
};

const InterphoniePage = () => {
  return <ServicePageLayout data={interphonieData} />;
};

export default InterphoniePage;