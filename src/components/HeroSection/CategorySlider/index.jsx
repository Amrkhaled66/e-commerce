import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderArrows from "../../ui/SliderArrows";
import Element from "./Element";

import data from "./data";

export default function CustomSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="relative  group  w-full h-fit ">
      <Swiper
        slidesPerView={9}
        loop
        modules={[Navigation]}
        className="w-full relative    h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {data.map((slide) => (
          <SwiperSlide>
            <Element title={slide.title} img={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        className=" !-left-1 group-hover:opacity-100  opacity-0 transition-all duration-300  "
        dir="left"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <SliderArrows
        className=" !-right-1 group-hover:opacity-100  opacity-0 transition-all duration-300  "
        dir="right"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
}
