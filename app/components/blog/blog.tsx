"use client";
import img1 from "../../assets/images/blog/Blog-1.jpg";
import img2 from "../../assets/images/blog/Blog-2.jpg";
//import img3 from "../../assets/images/blog/blog-3.jpg";
//import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "22 Oct, 2022",
    commentaire: 246,
    title: "Plus de 250 enfants formés au codage",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "2019, 2025",
    commentaire: 500,
    title: "plus de 500 telephone  mobiles apple reparés",
    link: "#!",
  },
  {
    id: 3,
    image: 3,
    date: "",
    //comments: 246,
    title: "",
    link: "#!",
  },
  {
    id: 4,
    image: 4,
    date: "",
    //comments: 246,
    title: "",
    link: "#!",
  },
  {
    id: 5,
    image: 2,
    date: "",
    //comments: 246,
    title: "",
    link: "#!",
  },
  {
    id: 6,
    image: 1,
    date: "",
    //comments: 246,
    title: "",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Blog</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Découvrez mes derniers articles de blog où je partage mes expériences
          en maintenance mobile , le développement web et les dernières
          tendances du secteur.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
