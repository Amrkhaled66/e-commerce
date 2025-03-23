import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
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
      className={`transform z-50 bg-white border-stroke !text-black p-3 rounded-full hover:border-main-color border-2 cursor-pointer duration-300 transition-all ${positionClass} ${className}`}
    >
      <FaArrowLeftLong />
    </button>
  );
}

export default function Category({ img, title, color, products }) {
  const swiperRef = useRef(null);

  return (
    <div className="flex overflow-hidden  h-fit    font-cairo flex-col gap-y-6">
      <div className="rounded-2xl overflow-hidden">
        <img className="w-full"  src={img} alt={title} />
      </div>
      <div className="p-[12px] space-y-6 h-fit rounded-2xl drop-shadow-lg bg-white">
        <div className="flex justify-between items-center">
          <div
            style={{ backgroundColor: color }}
            className="flex gap-x-1 w-fit py-3 rounded-[50px] items-center font-[700] px-6 text-white"
          >
            {title}
            <FaArrowLeftLong className="rotate-45 w-[24px] h-[24px]" />
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
        <div className=" space-y-6">
          <Swiper
            ref={swiperRef}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className=" h-full "
            modules={[Navigation]}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
              774: {
                slidesPerView: 2,
              }
            }}
          >{
            products.reduce((slides, _, i) => {
              if (i % 3 === 0) {
                slides.push(
                  <SwiperSlide className="h-full" key={i}>
                    <div className="flex flex-col h-full gap-y-6">
                      {products.slice(i, i + 3).map((p, productIndex) => (
                        <ProductCard isHorizontal={true} key={productIndex} {...p} />
                      ))}
                    </div>
                  </SwiperSlide>
                );
              }
              return slides;
            }, [])
          }
          </Swiper>
        </div>
      </div>
    </div>
  );
}
