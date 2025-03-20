import CategoryCarousel from "../components/ui/CategorySliderSection/index";
import sellingSlider from "src/assets/sellingSlider.jpeg";

import img1 from "src/assets/sellingSlider/1.jpeg";

const data = [
  {
    img: img1,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
 
 
];

export default function SellingCarousel() {
  return (
    <CategoryCarousel
      img={sellingSlider}
      carouselData={data}
      title="تخفيضات ضخمة اليوم"
    />
  );
}
