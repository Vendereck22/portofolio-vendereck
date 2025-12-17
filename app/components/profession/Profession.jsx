import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Maintenance Mobile Apple",
    description:
      "J'effectue des réparations précises sur les appareils Apple, notamment les iPhones, les iPads et les MacBooks, garantissant des performances et un fonctionnement optimaux",
  },
  {
    id: 2,
    title: "Mentor Technologique",
    description:
      "J'accompagne et soutiens les enfants dans leur parcours technologique, en leur fournissant un mentorat et une formation pour les aider à développer leurs compétences et à atteindre leurs objectifs en technologie notamment en robotique et en programmation.",
  },
  {
    id: 3,
    title: "Développement Web",
    description:
      "Je construis des applications web réactives et performantes en utilisant des technologies modernes, en assurant accessibilité, évolutivité et maintenabilité.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">Ce que je fais</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            En tant que professionnel polyvalent, j'excelle dans trois domaines
            clés : Developpement web , maintenance mobile de la marque apple et
            l'education technologique des jeunes .
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Mon approche allie créativité et expertise technique pour proposer
            des solutions à la fois numérique et hautement fonctionnelles pour
            les utilisateurs.
          </p>
        </div>
        <a
          href="#!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Contactez-moi
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
