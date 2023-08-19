"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import CardCart from "./CarCard";
import { CarCardProps } from "@/interfaces/interfaces";

interface SliderProps {
  data: CarCardProps[];
}

const Slider = ({ data }: SliderProps) => {
  return (
    <div className="mt-7">
      <Swiper
        breakpoints={{
          1023: {
            spaceBetween: 32,
          },
          360: {
            slidesPerView: "auto",
            spaceBetween: 19,
          },
        }}
        className="mySwiper"
      >
        {data?.reverse().map((data) => (
          <SwiperSlide key={data._id}>
            <CardCart {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
