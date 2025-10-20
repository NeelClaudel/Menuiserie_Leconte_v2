import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clôture Details Page - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Clôture details page for Solid Pro"
};

const InterphonieDetails = async () => {
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
                  Systèmes d'interphonie vidéo et audio
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
                  Contrôlez vos accès en toute sécurité
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
                    Renforcez la sécurité de votre habitation avec un système d'interphonie moderne et performant. Menuiserie Leconte installe des équipements vidéo et audio qui vous permettent d'identifier vos visiteurs avant d'ouvrir, que vous soyez chez vous ou à distance. Écrans haute définition, vision nocturne infrarouge, grand angle de vision : nos interphones offrent une surveillance optimale de votre entrée jour et nuit.
                  </p>

                  <p>
                    Nous équipons maisons individuelles et copropriétés sur Belz, Auray, Carnac et environs avec des solutions adaptées à chaque configuration. Interphone filaire pour les installations neuves, ou système sans fil pour la rénovation sans travaux importants. Les modèles connectés se pilotent depuis votre smartphone : recevez une notification à chaque sonnerie, parlez à vos visiteurs et déclenchez l'ouverture du portail où que vous soyez dans le monde.
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
                    Installation intégrée et fonctionnalités avancées
                  </h3>

                  <p>
                    L'interphonie s'intègre parfaitement avec votre motorisation de portail pour un système d'accès complet et fluide. Nous réalisons le câblage électrique selon les normes, le paramétrage des platines de rue, et l'installation des moniteurs intérieurs à l'emplacement de votre choix. Fonction mains-libres, enregistrement vidéo des visites, badges RFID pour les accès récurrents : profitez des dernières technologies.
                  </p>
                  <p>
                    Les systèmes que nous installons sont évolutifs et peuvent être complétés par d'autres équipements de sécurité : caméras de surveillance, détecteurs de mouvement, éclairage automatique. Configuration multi-utilisateurs pour que chaque membre de la famille dispose de ses propres identifiants et autorisations. Formation complète à l'utilisation, notice en français, et support technique réactif : nous vous accompagnons pour maîtriser votre installation en toute simplicité.
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

export default InterphonieDetails;
