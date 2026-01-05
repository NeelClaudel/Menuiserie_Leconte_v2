import { Metadata } from "next";
import ServicePageLayout from "@/components/ServicePageLayout";
import { ouverturesData } from "@/data/services/ouvertures";

export const metadata: Metadata = {
  title: ouverturesData.metadata.title,
  description: ouverturesData.metadata.description,
};

const OuverturesPage = () => {
  return <ServicePageLayout data={ouverturesData} />;
};

export default OuverturesPage;