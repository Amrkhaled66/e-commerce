import CategoryCarousel from "../../components/ui/CategorySliderSection/index";
import clothesSlider from "src/assets/clothesSlider.jpeg";

import img1 from "src/assets/clothes/1.jpeg";
import img2 from "src/assets/sellingSlider/2.jpeg";
import img3 from "src/assets/sellingSlider/3.jpeg";

const data = [
  {
    img: img1,
    title: "قميص رجالي منسوج بأزرار وياقة بولو وأكمام طويلة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "قميص رجالي منسوج بأزرار وياقة بولو وأكمام طويلة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "قميص رجالي منسوج بأزرار وياقة بولو وأكمام طويلة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "قميص رجالي منسوج بأزرار وياقة بولو وأكمام طويلة",
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
      img={clothesSlider}
      carouselData={data}
      title="الموضة و الملابس"
    />
  );
}
