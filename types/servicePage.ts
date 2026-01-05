export type ServiceSection = {
  title?: string;
  paragraphs: string[];
  images?: { src: string; alt: string }[];
};

export type ServicePageData = {
  slug: string;
  title: string;
  subtitle: string;
  mainImage: string;
  mainImageAlt: string;
  sections: ServiceSection[];
  metadata: {
    title: string;
    description: string;
  };
};