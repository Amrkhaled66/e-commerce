import { useRef, useState, useEffect } from "react";
import SliderArrows from "../SliderArrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../ProductCard";

import SliderPoints from "../SliderPoints";
export default function CategoryCarousel({ title, img, carouselData }) {
  const swiperRef = useRef(null);
  const [activeGroup, setActiveGroup] = useState(0); // Track active group index
  const slidesPerGroup = 4; // Number of slides per group

  // Calculate the number of groups
  const totalGroups = Math.ceil(carouselData.length / slidesPerGroup);

  // Function to handle custom dot clicks
  const handleDotClick = (groupIndex) => {
    if (swiperRef.current) {
      const targetSlideIndex = groupIndex * slidesPerGroup; // Calculate the starting slide index for the group
      swiperRef.current.slideTo(targetSlideIndex); // Navigate to the starting slide of the group
    }
  };


  const handleSlideChange = (swiper) => {
    const currentGroup = Math.floor(swiper.realIndex / slidesPerGroup);
    setActiveGroup(currentGroup);
  };

  return (
    <div className="font-cairo h-full !py-(--section-padding) space-y-12 container mx-auto">
      <h3 className="font-bold text-[34px]">{title}</h3>
      <div className="h-[476px] gap-x-6 flex">
        <img className="w-[25%] rounded-[26px]" src={img} alt={title} />

        <div className="w-[75%]">
          <div className="relative group w-full h-fit">
            <Swiper
              slidesPerView={4}
              loop
              modules={[Navigation]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={handleSlideChange} // Update active group on slide change
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
            >
              {carouselData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <ProductCard
                    img={slide.img}
                    title={slide.title}
                    starts={slide.starts}
                    sellingCount={slide.sellingCount}
                    price={slide.price}
                    discountedPrice={slide.discountedPrice}
                    ProductImages={slide.ProductImages}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <SliderPoints
              className="!-bottom-9"
              length={totalGroups}
              onDotClick={handleDotClick}
              currentIndex={activeGroup}
              activeBg="black"
            />

            {/* Slider Arrows */}
            <SliderArrows
              className="!-left-1 group-hover:opacity-100 opacity-0 transition-all duration-300"
              dir="left"
              onClick={() => swiperRef.current?.slideNext()}
            />
            <SliderArrows
              className="!-right-1 group-hover:opacity-100 opacity-0 transition-all duration-300"
              dir="right"
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
