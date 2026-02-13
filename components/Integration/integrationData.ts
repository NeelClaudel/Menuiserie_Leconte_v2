export type BrandItem = {
  type: "brand";
  src: string;
  alt: string;
};

export type DotItem = {
  type: "dot";
  size: number;
  color: string;
};

export type EmptyItem = {
  type: "empty";
};

export type IntegrationItem = BrandItem | DotItem | EmptyItem;

export const headerData = {
  title: "NOS MARQUES PARTENAIRES",
  subtitle: "Nous Selectionnons Nos Fournisseurs Avec Soin",
  description: "Pour Garantir La Meilleur Qualite Et Longevite A Nos Clients.",
};

export const integrationItems: IntegrationItem[] = [
  { type: "brand", src: "./images/brand/Somfy-logo.svg", alt: "Somfy" },
  { type: "empty" },
  { type: "brand", src: "./images/brand/finstral-logo.svg", alt: "Finstral" },
  { type: "dot", size: 11, color: "#FFDB26" },
  { type: "brand", src: "./images/brand/jeanneau-logo.svg", alt: "Jeanneau" },
  { type: "empty" },
  { type: "dot", size: 15, color: "#62E888" },
  { type: "brand", src: "./images/brand/gypass-logo.svg", alt: "Gypass" },
  { type: "dot", size: 23, color: "#EF5C00" },
  { type: "brand", src: "./images/brand/logo-aiphone_02.svg", alt: "Aiphone" },
  { type: "dot", size: 15, color: "#016BFF" },
  { type: "brand", src: "/images/brand/Logo-ICP-vecto-1-1.webp", alt: "ICP" },
  { type: "empty" },
  { type: "brand", src: "/images/brand/LOGO-SDA-BLANC.webp", alt: "SDA" },
  { type: "dot", size: 15, color: "#016BFF" },
  { type: "brand", src: "/images/brand/png_GYT_logo.png", alt: "SDA" },
];