"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import Ansari from "../components/crew/Ansari";
import Glover from "../components/crew/Glover";
import Hutley from "../components/crew/Hutley";
import ShuttleWorth from "../components/crew/ShuttleWorth";

const page = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/assets/crew/background-crew-desktop.jpg)`,
      }}
      className="min-h-[100vh] bg-no-repeat bg-cover bg-center pt-40 md:pt-64 text-white"
    >
      <div className="flex justify-center md:pl-20  pb-20 items-start flex-col">
        <h2 className="text-3xl tracking-[0.15em] font-light text-center md:text-start text-white uppercase">
          <span className="text-gray-500 font-medium px-2.5">02</span> meet your
          crew
        </h2>
      </div>
      <div>
        <Swiper
          style={{
            "--swiper-pagination-color": "white",
          }}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <Ansari />
          </SwiperSlide>
          <SwiperSlide>
            <Glover />
          </SwiperSlide>
          <SwiperSlide>
            <Hutley />
          </SwiperSlide>
          <SwiperSlide>
            <ShuttleWorth />
          </SwiperSlide>

          <div className="swiper-pagination-bullet pt-5"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default page;
