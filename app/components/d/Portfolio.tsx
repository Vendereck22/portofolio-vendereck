import Projects from "./Projects";

const projectData = [
  {
    id: 1,
    image: "/images/portfolio/card-1.jpg",
    category: "Coding",
    title: "Programmation Scratch",
    description:
      "Initiation de jeunes apprenants aux concepts de la programmation grâce à Scratch, favorisant ainsi leur créativité et leur raisonnement logique. Étude de cas",
    link: "#!",
  },
  {
    id: 2,
    image: "/images/portfolio/card-2.jpg",
    category: "ROBOTIQUE",
    title: "Robotique Éducative",
    description:
      "Encadrement de sessions de robotique éducative pour stimuler l'intérêt des jeunes pour la technologie et l'ingénierie à travers des projets pratiques et interactifs.",
    link: "#!",
  },
  {
    id: 3,
    image: "/images/portfolio/card-3.jpg",
    category: "Coding",
    title: "developppent de jeux éducatifs avec scratch",
    description:
      "Conception et développement de jeux éducatifs interactifs utilisant Scratch, visant à rendre l'apprentissage ludique et engageant pour les jeunes apprenants.",
    link: "#!",
  },
  {
    id: 4,
    image: "/images/portfolio/card-4.jpg",
    category: "Formateur en freelance ",
    title: "Formateur en coding et Robotique Éducative de jeunes",
    description:
      "formateur  en freelance au centre playcode academy rdc  axés sur Scratch, la robotique éducative et les disciplines STEM, adaptés aux besoins spécifiques des écoles,des institutions éducatives et aux enfants .",
    link: "#!",
  },
  {
    id: 5,
    image: "/images/portfolio/card-5.jpg",
    category: "IoT",
    title: "Arduino et IoT pour débutants",
    description:
      "Introduction aux concepts de base d'Arduino et de l'Internet des objets (IoT) pour les jeunes, en mettant l'accent sur la création de projets simples et pratiques.",
    link: "#!",
  },
  {
    id: 6,
    image: "/images/portfolio/card-6.jpg",
    category: "des enfants de 7 à 14 ans",
    title: "Ateliers technologiques pour enfants",
    description:
      "Organisation d'ateliers technologiques interactifs pour les enfants âgés de 7 à 14 ans, couvrant des sujets tels que la programmation, la robotique et les bases de l'informatique. et surtout la pratique  ou les enfants créent des jeux videos et les animations en applicant les base de la programmation et machine learning.",
    link: "#!",
  },
  {
    id: 7,
    image: "/images/portfolio/card-7.jpg",
    category: "Developpement web",
    title: "Sites web ",
    description:
      "Développement de sites web simples pour des projets personnels.",
    link: "#!",
  },
  {
    id: 8,
    image: "/images/portfolio/card-8.jpg",
    category: "Laboratoire de réparation",
    title: "la micro soudure et la réparation électronique",
    description:
      "Réparation des appareils électroniques de la marque apple  et de composants via la micro-soudure, démontrant des compétences techniques avancées et une attention aux détails.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title "></p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Cette sélection de travaux récents est la preuve de mon engagement
            en tant que Mentor Technologique. Mon rôle principal est de
            structurer l'apprentissage et de guider les jeunes esprits dans la
            maîtrise des disciplines clés de demain : L'initiation aux outils
            numériques (applicatifs et pratiques) ; Les fondamentaux de la
            Programmation ; Et la conception en Robotique Éducative. À travers
            ces projets, je m'efforce de transmettre non seulement des
            compétences techniques, mais aussi une passion pour l'innovation et
            la créativité, en préparant la prochaine génération à relever les
            défis technologiques de demain.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Plus de projets
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
