import CategoryCarousel from "../../components/ui/CategorySliderSection/index";
import sellingSlider from "src/assets/sellingSlider.jpeg";

import img1 from "src/assets/sellingSlider/1.jpeg";
import img2 from "src/assets/sellingSlider/2.jpeg";
import img3 from "src/assets/sellingSlider/3.jpeg";

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
  {
    img: img1,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img2,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img2,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img2,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img2,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img3,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img3,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img3,
    title: "موبايل آيفون 16 بسعة 128 جيجابايت من آبل - لون أبيض",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img3,
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
