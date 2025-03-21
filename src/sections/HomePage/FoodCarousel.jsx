import CategoryCarousel from "../../components/ui/CategorySliderSection/index";
import foodSlider from "src/assets/foodSlider.jpeg";

import img1 from "src/assets/food/1.jpeg";
import img2 from "src/assets/food/2.jpeg";
import img3 from "src/assets/sellingSlider/3.jpeg";

const data = [
  {
    img: img1,
    title: "مشروب فاكهة استوائية تروبيكال من أصلان، 200 مل - مجموعة من 27 قطعة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "مشروب فاكهة استوائية تروبيكال من أصلان، 200 مل - مجموعة من 27 قطعة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "مشروب فاكهة استوائية تروبيكال من أصلان، 200 مل - مجموعة من 27 قطعة",
    starts: 5,
    sellingCount: 128,
    price: 1000,
    discountedPrice: 800,
    ProductImages: 4,
  },
  {
    img: img1,
    title: "مشروب فاكهة استوائية تروبيكال من أصلان، 200 مل - مجموعة من 27 قطعة",
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

export default function FoodCarousel() {
  return (
    <CategoryCarousel
      img={foodSlider}
      carouselData={data}
      title="الطعام والشراب"
    />
  );
}
