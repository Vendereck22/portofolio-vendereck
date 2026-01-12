"use client";
import person from "../../assets/images/person2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../Common/SocialMedia/SocialMedia";
import Link from "next/link";
import Image from "next/image";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <Image
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt="person-img"
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-4">
            <div className="flex justify-center">
              <div className="px-6 max-w-75 py-3 z-50 text-center  rounded-4px center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-132">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            informaticien en genie logiciel, Mentor Technologique et Technicien
            informatique polyvalent
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Passionné par la technologie et dévoué à l'accompagnement de la
              prochaine génération d'innovateurs.
            </p>
            <p className="mt-3">
              Compétent en réparation électronique, développement web, et
              mentorat des jeunes dans l'éducation technologique.
            </p>
            <p className="mt-3">
              Engagé à partager mes connaissances et à promouvoir
              l'apprentissage technologique.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <Link
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
              href="#!"
            >
              Mes projets
            </Link>
            <Link
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="/Vendereck Nguala moise .pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Télécharger mon CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
