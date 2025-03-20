import { useRef } from "react";
import SliderArrows from "../SliderArrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "../ProductCard";
export default function CategoryCarousel({ title, img, carouselData }) {
  const swiperRef = useRef(null);

  return (
    <div className=" font-cairo  bg-white space-y-12 !py-(--section-padding)  container mx-auto ">
      <h3 className="font-bold text-[34px] ">{title}</h3>
      <div className=" max-h-[476px] gap-x-6  flex">
        <img className="w-[25%] rounded-[26px]" src={img} alt={title} />

        <div className="w-[75%]">
          <div className="relative  group  w-full h-fit ">
            <Swiper
              slidesPerView={4}
              loop
              modules={[Navigation]}
              className="w-full relative   flex h-fit"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {carouselData.map((slide) => (
                <SwiperSlide>
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
        </div>
      </div>
    </div>
  );
}
