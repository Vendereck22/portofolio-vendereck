import InformationSummary from "./InformationSummary";
import person from "../../assets/images/person.jpg";
import Image from "next/image";
// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: " 5 ans",
  },
  {
    id: 2,
    title: "Enfants formés",
    description: "250+",
  },
  {
    id: 3,
    title: "Sites web développés",
    description: "7+",
  },
  {
    id: 4,
    title: "Clients satisfaits",
    description: "450+",
  },
  {
    id: 5,
    title: "Téléphones réparés",
    description: "500+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Bonjour, je suis
            <span className="text-nowrap shrink-0 inline-block w-full">
              Vendereck Nguala
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Je suis un{" "}
            <span className="bg-highlight">
              entrepreneur tech et expert en maintenance mobile Apple,
            </span>{" "}
            spécialisé dans la
            <span className="bg-highlight">
              {" "}
              micro-soudure électronique de précision
            </span>{" "}
            à Kinshasa, CEO de Irepair NextGen Tech et mentor technologique, je
            m'investis dans l'éducation numérique des jeunes en les initiant à
            la robotique et au codage, notamment en tant que formateur freelance
            chez PlayCode Academy RDC. Également développeur web et ingénieur en
            sécurité informatique, je mets ma double expertise matérielle et
            logicielle au service de l'innovation durable.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:example@gmail.com"
            >
              Contactez-moi
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-536/636 relative`}
      >
        <Image
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
