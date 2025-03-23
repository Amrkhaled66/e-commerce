import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import SliderArrows from "src/components/ui/SliderArrows";
import Element from "./Element";

import data from "./data";

export default function CustomSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="group relative h-fit !w-screen">
      <Swiper
        loop
        slidesPerView={2.5}
        autoWidth={true}
        spaceBetween={20}
        modules={[Navigation]}
        className="relative h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1024: {
            slidesPerView: 9,
          },
          744: {
            slidesPerView: 5,
          },
        }}
      >
        {data.map((slide) => (
          <SwiperSlide>
            <Element title={slide.title} img={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderArrows
        className="!-left-1 hidden opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
        dir="left"
        onClick={() => swiperRef.current?.slidePrev()}
      />
      <SliderArrows
        className="!-right-1 hidden opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
        dir="right"
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
}
