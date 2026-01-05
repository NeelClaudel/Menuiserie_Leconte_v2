import { ServicePageData } from "@/types/servicePage";

export const carportData: ServicePageData = {
  slug: "carport",
  title: "Carports en bois et aluminium",
  subtitle: "Protegez vos vehicules avec elegance",
  mainImage: "/images/blog/blog-01.png",
  mainImageAlt: "Carport sur mesure",
  metadata: {
    title: "Carports - Menuiserie Leconte",
    description: "Conception et installation de carports en bois et aluminium sur mesure dans le Morbihan",
  },
  sections: [
    {
      paragraphs: [
        "Offrez a vos vehicules une protection durable contre les intemperies avec nos carports sur mesure. Menuiserie Leconte concoit et installe des abris pour voitures, motos, camping-cars ou bateaux, parfaitement integres a l'architecture de votre maison. Structure en bois massif pour un aspect chaleureux et naturel, ou ossature aluminium pour une ligne contemporaine et un entretien minimal : nous adaptons le design a vos preferences.",
        "Nous intervenons sur Belz, Auray, Carnac, Lorient et Vannes pour creer des carports fonctionnels et esthetiques. Simple, double ou triple, adosse a votre habitation ou autoportant dans votre jardin : chaque configuration est etudiee selon l'espace disponible et vos besoins de stationnement. Toiture plate, monopente ou double pente, avec couverture en polycarbonate, tuiles, bac acier ou vegetalisee selon le style recherche.",
      ],
      images: [
        { src: "/images/blog/blog-01.png", alt: "Carport bois" },
        { src: "/images/blog/blog-02.png", alt: "Carport aluminium" },
      ],
      title: "Robustesse et conformite aux normes",
    },
    {
      paragraphs: [
        "Un carport doit resister aux conditions climatiques du Morbihan : vents cotiers, pluies frequentes et embruns marins. Nos structures sont dimensionnees selon les normes de construction en vigueur avec des ancrages adaptes a la nature de votre sol. Bois traite autoclave classe 4 pour une resistance optimale a l'humidite, aluminium thermolaque garanti anti-corrosion, et quincaillerie inoxydable pour une durabilite maximale.",
        "La construction d'un carport necessite generalement une declaration prealable de travaux que nous pouvons vous aider a preparer. Nous fournissons les plans cotes, les notices descriptives et les documents techniques exiges par votre mairie. Installation soignee avec fondations adaptees, poteaux parfaitement alignes et couverture etanche. Options disponibles : eclairage LED integre, gouttiere avec evacuation des eaux, parois laterales amovibles, ou borne de recharge pour vehicule electrique. Garantie decennale sur la structure pour une tranquillite totale.",
      ],
    },
  ],
};