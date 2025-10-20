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
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Réalisations",
    newTab: false,
    path: "/#blog",
  },
  {
    id: 2.3,
    title: "Docs",
    newTab: false,
    path: "/docs",
  },
  {
    id: 3,
    title: "Nos Produits",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Motorisations Connectées",
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
        title: "Clôtures",
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
    ],
  },

  {
    id: 4,
    title: "Contact",
    newTab: false,
    path: "#support",
  },
];

export default menuData;
