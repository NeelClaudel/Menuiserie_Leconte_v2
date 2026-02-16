import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "\u00C0 Propos",
    newTab: false,
    path: "/#about",
  },
  {
    id: 3,
    title: "Nos Services",
    newTab: false,
    path: "/#features",
    submenu: [
      {
        id: 3.1,
        title: "Motorisations Connect\u00E9es",
        newTab: false,
        path: "/pages/motorisation",
      },
      {
        id: 3.2,
        title: "Volets Roulants",
        newTab: false,
        path: "/pages/volets",
      },
      {
        id: 3.3,
        title: "Terrasse Et Pergola",
        newTab: false,
        path: "/pages/terrasse_pergola",
      },
      {
        id: 3.4,
        title: "Stores Bannes",
        newTab: false,
        path: "/pages/stores_bannes",
      },
      {
        id: 3.5,
        title: "Portails",
        newTab: false,
        path: "/pages/portails",
      },
      {
        id: 3.6,
        title: "Cl\u00F4tures",
        newTab: false,
        path: "/pages/clotures",
      },
      {
        id: 3.7,
        title: "Interphonie",
        newTab: false,
        path: "/pages/interphonie",
      },
      {
        id: 3.8,
        title: "Portes De Garage",
        newTab: false,
        path: "/pages/garage",
      },
      {
        id: 3.9,
        title: "Ouvertures",
        newTab: false,
        path: "/pages/ouvertures",
      },
      {
        id: 3.10,
        title: "Carports",
        newTab: false,
        path: "/pages/carport",
      },
    ],
  },
  {
    id: 4,
    title: "FAQ",
    newTab: false,
    path: "/#faq",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/#support",
  },
];

export const quickLinks = menuData.map((item) => ({
  title: item.title,
  path: item.path || "/",
}));

const servicesMenu = menuData.find((item) => item.submenu);
export const serviceLinks = (servicesMenu?.submenu || []).map((item) => ({
  title: item.title,
  path: item.path || "#",
}));

export default menuData;