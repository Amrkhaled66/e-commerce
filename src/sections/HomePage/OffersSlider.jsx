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
    <button className=" px-5 py-3 border border-stroke font-cairo rounded-[50px] font-[700]">
      {title}
    </button>
  );
};

export default function OffersSlider() {
    const swiperRef = useRef(null);


  return (
    <div className=" w-full mx-auto !py-[24px] bg-mainSectionColor">
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
            <SliderElement title={slide.title}  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
