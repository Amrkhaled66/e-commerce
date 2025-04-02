import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";
const data = [
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
  { title: "قسيمة اضافية" },
];

const SliderElement = ({ title }) => {
  return (
    <button className="border-stroke font-cairo rounded-[50px] border px-5 py-3 text-sm lg:text-base font-[700] ">
      {title}
    </button>
  );
};

export default function OffersSlider() {
  const swiperRef = useRef(null);

  return (
    <div className="bg-mainSectionColor mx-auto w-full !py-[28px]">
      <Swiper
        slidesPerView={2.5}
        loop
        modules={[Navigation]}
        className="relative h-full w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          1024: {
            slidesPerView: 9,
          },
          744: {
            slidesPerView: 4.3,
          }
        }}
      >
        {data.map((slide) => (
          <SwiperSlide>
            <SliderElement title={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
