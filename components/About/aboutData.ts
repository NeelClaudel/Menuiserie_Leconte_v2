export type AboutItem = {
  id: number;
  title: string;
  description: string;
};

export const aboutIntro = {
  label: "Notre Philosophie",
  subtitle:
    "Chez Menuiserie Leconte, chaque projet est une rencontre entre votre vision et notre savoir-faire.",
};

export const aboutItems: AboutItem[] = [
  {
    id: 1,
    title: "Savoir-faire Artisanal",
    description:
      "Un m\u00e9tier transmis et perfectionn\u00e9 au fil des ann\u00e9es, o\u00f9 chaque geste compte pour un r\u00e9sultat \u00e0 la hauteur de vos attentes. Nous traitons chaque projet avec le m\u00eame niveau d\u2019exigence.",
  },
  {
    id: 2,
    title: "\u00c9coute & Sur Mesure",
    description:
      "Nous prenons le temps de comprendre vos besoins, votre habitat et vos contraintes pour proposer des solutions qui vous ressemblent.",
  },
  {
    id: 3,
    title: "Mat\u00e9riaux Durables",
    description:
      "Bois, aluminium ou PVC : nous s\u00e9lectionnons des mat\u00e9riaux de qualit\u00e9, adapt\u00e9s au climat morbihannais et con\u00e7us pour durer.",
  },
  {
    id: 4,
    title: "Proximit\u00e9 & R\u00e9activit\u00e9",
    description:
      "Bas\u00e9s \u00e0 Belz, nous intervenons rapidement sur tout le secteur d\u2019Auray, Carnac, Lorient et Vannes. Un interlocuteur unique du devis \u00e0 la livraison.",
  },
  {
    id: 5,
    title: "Fournisseurs S\u00e9lectionn\u00e9s",
    description:
      "Nous privil\u00e9gions des marques fran\u00e7aises reconnues pour leur fiabilit\u00e9 et leur savoir-faire : Somfy, Finstral, Gypass, Aiphone.",
  },
  {
    id: 6,
    title: "Suivi & Confiance",
    description:
      "Garantie d\u00e9cennale, service apr\u00e8s-vente r\u00e9actif et conseils d\u2019entretien. Nous restons \u00e0 vos c\u00f4t\u00e9s bien apr\u00e8s la pose.",
  },
];

export const aboutCta = {
  label: "D\u00e9pannage Rapide",
  description:
    "Intervention d\u2019urgence sous 48h pour tous vos \u00e9quipements de menuiserie ext\u00e9rieure.",
  linkText: "Contactez-nous",
  linkHref: "/support",
};