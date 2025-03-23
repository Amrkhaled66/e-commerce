import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "src/assets/sellingSlider/1.jpeg";
import img2 from "src/assets/sellingSlider/2.jpeg";
import img3 from "src/assets/sellingSlider/3.jpeg";

import CategoryCarousel from "src/components/ui/CategorySliderSection/CategorySlider";

const productsData = [
  {
    img: img1,
    title: "كاميرا واي فاي تابو C200",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img1,
    title: "كاميرا واي فاي تابو C200",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img1,
    title: "كاميرا واي فاي تابو C200",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img1,
    title: "كاميرا واي فاي تابو C200",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img1,
    title: "كاميرا واي فاي تابو C200",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img1,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: false,
    isWatching: true,
    isSelled: true,
    isUnique: false,
  },
  {
    img: img2,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: true,
    isWatching: false,
    isSelled: false,
    isUnique: true,
  },
  {
    img: img3,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
    isNew: false,
    isWatching: true,
    isSelled: true,
    isUnique: false,
  },
];

const filtersData = [
  { title: "عرض الكل", id: "all" },
  { title: "الأكثر مشاهدة", id: "isWatching" },
  { title: "المنتجات المميزة", id: "isUnique" },
  { title: "الأكثر مبيعا", id: "isSelled" },
  { title: "الوافدون الجدد", id: "isNew" },
];

const FilterElement = ({ isActive, title, onClick, id }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`${
        isActive ? "bg-main-color text-white" : ""
      } cursor-pointer px-4 text-sm border mx-auto duration-300 transition-all rounded-[50px] border-stroke font-[700] lg:text-xl py-3`}
    >
      {title}
    </button>
  );
};

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(productsData);
  const swiperRef = useRef(null);

  const handleClick = (id) => {
    if (id === "all") {
      setFilteredData(productsData);
    } else if (id === "isWatching") {
      setFilteredData(productsData.filter((item) => item.isWatching === true));
    } else if (id === "isGood") {
      setFilteredData(productsData.filter((item) => item.isUnique === true));
    } else if (id === "isSelling") {
      setFilteredData(productsData.filter((item) => item.isSelled === true));
    } else if (id === "isNew") {
      setFilteredData(productsData.filter((item) => item.isNew === true));
    }

    setActiveFilter(id);
  };

  return (
    <div className="flex  flex-col items-center gap-y-15  w-full mx-auto font-cairo">
      <Swiper
        loop
        modules={[Navigation]}
        className="w-screen lg:w-[75%] flex items-center "
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          1200: { slidesPerView: 5 },
          774:{ slidesPerView: 4.5 },
          0: { slidesPerView: 2.4 },
        }}

      >
        {filtersData.map((item) => (
          <SwiperSlide
            key={item.id}
            className="w-screen flex items-center justify-between"
          >
            <FilterElement
              id={item.id}
              isActive={activeFilter === item.id}
              onClick={handleClick}
              title={item.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <CategoryCarousel slidesPerGroup={5} carouselData={filteredData} />
    </div>
  );
}
