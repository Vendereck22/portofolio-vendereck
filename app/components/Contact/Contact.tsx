"use client";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import SocialMedia from "../Common/SocialMedia/SocialMedia";
import Address from "./Adresse";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Kinshasa, Ngaliema, RDC",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "tsimbanguala150@gmail.com",
  },
  {
    icon: faPhone,
    title: "contactez-moi",
    description: "+243 974072465",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Parlons de votre projet.
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                Je suis disponible pour du travail freelance. Envoyez-moi un
                message si vous avez un projet dont vous pensez que je serais un
                bon candidat.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address key={index} data={item} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Parlons de votre projet.
            </p>
            {/* <Form /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
