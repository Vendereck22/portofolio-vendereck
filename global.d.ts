// Autorise l'importation de fichiers CSS dans n'importe quel fichier (.jsx ou .tsx)
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Déclare les modules de Swiper pour que l'éditeur ne les marque plus en rouge
declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/effect-fade";

// Si tu as d'autres bibliothèques sans types à l'avenir, tu les ajouteras ici
