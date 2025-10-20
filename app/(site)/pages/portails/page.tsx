import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clôture Details Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Clôture details page for Solid Pro"
};

const PortailsDetails = async () => {
  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              {/*<div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-hidden dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>*/}

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Nos Produits
                </h4>

                <ul>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/motorisation">Motorisations Connectées</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/stores_bannes">Stores Bannes</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/portails">Portails</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/clotures">Clôtures</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/interphonie">Interphonie</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/garage">Portes De Garage</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/volets">Volets Roulants</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/terrasse_pergola">Terrasse Et Pergola</a>
                  </li>
                  <li className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                    <a href="/pages/ouvertures">Ouvertures</a>
                  </li>
                </ul>
              </div>

              {/*<RelatedPost />*/}
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <h1 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Portails
                </h1>
                <div className="mb-10 w-full overflow-hidden ">

                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h3 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Portails battants et coulissants sur mesure
                </h3>

                {/*<ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    Jhon Doe
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: July 30, 2023
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category :
                    </span>
                    Events
                  </li>
                </ul>*/}

                <div className="blog-details">
                  <p>
                    Première impression de votre propriété, le portail mérite une attention particulière. Menuiserie Leconte conçoit et installe des portails sur mesure en aluminium, bois ou PVC, parfaitement adaptés à la largeur de votre entrée et au style architectural de votre maison. Portail battant à deux vantaux pour les entrées traditionnelles, ou portail coulissant autoportant pour les espaces restreints : nous trouvons la solution technique idéale.
                  </p>

                  <p>
                    Notre expertise couvre tout le Morbihan de Belz à Vannes : étude de terrain, choix des matériaux, motorisation intégrée et installation complète. Nous proposons une large gamme de designs : contemporain avec lames horizontales, classique avec traverse centrale, ajouré pour la luminosité, ou plein pour l'intimité totale. Chaque portail est fabriqué selon vos dimensions exactes avec des finitions de qualité professionnelle.
                  </p>

                  <div className="flex flex-wrap gap-5">
                    <Image
                      src={"/images/blog/blog-01.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                    <Image
                      src={"/images/blog/blog-02.png"}
                      width={350}
                      height={200}
                      alt="image"
                    />
                  </div>

                  <h3 className="pt-8">
                    Motorisation fiable et sécurité optimale
                  </h3>

                  <p>
                    Un portail motorisé apporte confort au quotidien et valeur ajoutée à votre bien. Nous installons des automatismes de marques reconnues (Nice, Came, Somfy) avec télécommandes, claviers à code, badges ou même reconnaissance de plaques d'immatriculation. Les systèmes de sécurité sont conformes aux normes européennes : détection d'obstacles, cellules photoélectriques, arrêt d'urgence et déverrouillage manuel en cas de panne.
                  </p>
                  <p>
                    La maintenance préventive prolonge la durée de vie de votre portail : nous intervenons pour le graissage des charnières, le réglage des vantaux, la vérification de la motorisation et le nettoyage des cellules. En cas de panne, notre service dépannage rapide intervient sous 48h dans tout le secteur. Garantie décennale sur la pose, garantie fabricant sur la motorisation : votre tranquillité est assurée pour de nombreuses années.
                  </p>
                </div>
                <div className="mt-10">             
                  <div className="flex flex-wrap gap-5">
                    <a
                      href="/support"
                      className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                    >
                        Prendre Contact
                      <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-dark.svg"
                      alt="Arrow"
                      className="dark:hidden"
                      />
                      <Image
                      width={20}
                      height={20}
                      src="/images/icon/icon-arrow-light.svg"
                      alt="Arrow"
                      className="hidden dark:block"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortailsDetails;
