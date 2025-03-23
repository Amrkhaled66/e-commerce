import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

import img1 from "src/assets/panner/1.png";
import img2 from "src/assets/panner/2.png";
import img3 from "src/assets/panner/3.png";
import img4 from "src/assets/panner/4.png";
import img5 from "src/assets/panner/5.png";
import img6 from "src/assets/panner/6.png";
import img7 from "src/assets/panner/7.png";
import img8 from "src/assets/panner/8.png";

const data = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
  { img: img6 },
  { img: img7 },
  { img: img8 },
  { img: img8 },
];

const SliderElement = ({ img }) => {
  return (
    <button className="font-cairo w-[176px] px-5 py-3 font-[700]">
      <img src={img} className="w-full" alt="" />
    </button>
  );
};

export default function PannerSlider() {
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
            slidesPerView: 8,
          },
          774: {
            slidesPerView: 3.5,
          },
        }}
      >
        {data.map((slide) => (
          <SwiperSlide>
            <SliderElement img={slide.img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
