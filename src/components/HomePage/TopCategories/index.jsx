import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css"; // Main Swiper CSS
import "swiper/css/navigation"; // Navigation module CSS
import { FaArrowLeftLong } from "react-icons/fa6";
import ProductCard from "../../ui/ProductCard";

function SliderArrows({ className = "", dir, ...props }) {
  const positionClass = dir === "right" ? "rotate-180 right-4" : "left-4";
  return (
    <button
      {...props}
      className={`border-stroke hover:border-main-color z-50 transform cursor-pointer rounded-full border-2 bg-white p-3 !text-black transition-all duration-300 ${positionClass} ${className}`}
    >
      <FaArrowLeftLong />
    </button>
  );
}

export default function Category({ img, title, color, products }) {
  const swiperRef = useRef(null);

  return (
    <div className="font-cairo flex h-fit flex-col  gap-y-6 overflow-hidden">
      <div className="overflow-hidden rounded-2xl">
        <img className="w-full" src={img} alt={title} />
      </div>
      <div className="h-fit space-y-6 rounded-2xl bg-white p-[12px] ">
        <div className="flex items-center justify-between">
          <div
            style={{ backgroundColor: color }}
            className="flex w-fit items-center gap-x-1 rounded-[50px] px-6 py-3 font-[700] text-white"
          >
            {title}
            <FaArrowLeftLong className="h-[24px] w-[24px] rotate-45" />
          </div>
          <div className="space-x-2">
            <SliderArrows
              onClick={() => swiperRef.current?.slidePrev()}
              dir="right"
            />
            <SliderArrows
              onClick={() => swiperRef.current?.slideNext()}
              dir="left"
            />
          </div>
        </div>
        <div className="space-y-6">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="h-full"
            modules={[Navigation]}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
              744: {
                slidesPerView: 2,
              },
            }}
          >
            {products.reduce((slides, _, i) => {
              if (i % 3 === 0) {
                slides.push(
                  <SwiperSlide className="h-full" key={i}>
                    <div className="flex h-full flex-col gap-y-6">
                      {products.slice(i, i + 3).map((p, productIndex) => (
                        <ProductCard
                          isHorizontal={true}
                          key={productIndex}
                          {...p}
                        />
                      ))}
                    </div>
                  </SwiperSlide>,
                );
              }
              return slides;
            }, [])}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
