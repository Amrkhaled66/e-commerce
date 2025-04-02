import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../ProductCard";
import SliderPoints from "../SliderPoints";
import SliderArrows from "../SliderArrows";

export default function CategorySlider({ carouselData, slidesPerGroup = 4 }) {
  const swiperRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0);

  const totalGroups = Math.ceil(carouselData.length / slidesPerGroup);

  const handleDotClick = (groupIndex) => {
    if (swiperRef.current) {
      const targetSlideIndex = groupIndex * slidesPerGroup;
      swiperRef.current.slideTo(targetSlideIndex);
    }
  };

  const handleSlideChange = (swiper) => {
    const currentGroup = Math.floor(swiper.realIndex / slidesPerGroup);
    setActiveGroup(currentGroup);
  };

  return (
    <div key={carouselData} className="group relative flex h-fit w-full">
      <Swiper
        slidesPerView={slidesPerGroup}
         className=" w-full"
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 16 },
          744: { slidesPerView: 2.7, spaceBetween: 20 },
          1024: {
            slidesPerView: slidesPerGroup,
            spaceBetween: 24,
          },
        }}
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide className="!w-fit   " key={index}>
            <ProductCard {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>

      <SliderPoints
        className="!-bottom-6"
        length={totalGroups}
        onDotClick={handleDotClick}
        currentIndex={activeGroup}
        activeBg="black"
      />

      <SliderArrows
        className="!-left-1 hidden opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
        dir="left"
        onClick={() => swiperRef.current?.slideNext()}
      />
      <SliderArrows
        className="!-right-1 hidden opacity-0 transition-all duration-300 group-hover:opacity-100 lg:block"
        dir="right"
        onClick={() => swiperRef.current?.slidePrev()}
      />
    </div>
  );
}
