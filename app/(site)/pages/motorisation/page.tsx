import { Metadata } from "next";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel/imageCarousel"; // Ajustez le chemin selon votre structure

export const metadata: Metadata = {
  title: "Motorisations Connectées - Menuiserie Leconte",
  description: "Solutions de motorisation connectée pour portails, portes de garage et volets roulants dans le Morbihan"
};

const MotorisationDetails = () => {
  // Liste des images pour le carrousel
  const carouselImages = [
    "/images/img_custom/terrasse_01.jpg",
    "/images/img_custom/terrasse_02.jpg",
    "/images/img_custom/window_01.jpg",
  ];

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
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
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <h1 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Motorisations Connectées
                </h1>
                
                <div className="mb-10 w-full overflow-hidden">
                  {/* Carrousel d'images */}
                  <ImageCarousel 
                    images={carouselImages}
                    autoPlayInterval={5000}
                    aspectRatio="aspect-[97/60] sm:aspect-[97/44]"
                  />
                </div>

                <h3 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  Confort et sécurité au bout des doigts
                </h3>

                <div className="blog-details">
                  <p>
                    Modernisez votre quotidien avec nos solutions de motorisation connectée. Menuiserie Leconte installe des systèmes intelligents qui vous permettent de contrôler vos portails, portes de garage et volets roulants depuis votre smartphone, tablette ou assistant vocal. Rentrez chez vous sans descendre de voiture, programmez vos volets selon vos horaires, et gérez vos accès à distance où que vous soyez.
                  </p>

                  <p>
                    Nos motorisations connectées s'adaptent à vos équipements existants ou neufs dans tout le Morbihan : Belz, Auray, Carnac, Lorient et Vannes. Nous travaillons avec des marques reconnues pour leur fiabilité et leur compatibilité avec les standards domotiques actuels. L'installation inclut le paramétrage complet du système, la connexion à votre réseau Wi-Fi, et une formation personnalisée pour maîtriser toutes les fonctionnalités.
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
                    Technologies avancées et économies d'énergie
                  </h3>

                  <p>
                    Au-delà du confort, les motorisations connectées optimisent votre consommation énergétique. Programmez la fermeture automatique de vos volets en soirée pour conserver la chaleur en hiver, ou leur ouverture matinale pour profiter du soleil. Recevez des notifications en cas d'intrusion ou de dysfonctionnement, et consultez l'historique des ouvertures pour un contrôle total de votre habitation.
                  </p>
                  <p>
                    Nous assurons l'installation électrique conforme aux normes, le paramétrage des capteurs de sécurité (détection d'obstacles, arrêt d'urgence), et la mise en service de toutes les fonctions avancées. Compatibilité garantie avec les principaux systèmes : Somfy TaHoma, Nice, Came Connect. Notre service après-vente assure le suivi, les mises à jour logicielles et le dépannage rapide de vos équipements connectés.
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

export default MotorisationDetails;