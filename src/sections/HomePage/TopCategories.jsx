import Category from "../../components/HomePage/TopCategories";

import smart from "../../assets/TopCategories/smart.jpeg";
import healthCare from "../../assets/TopCategories/healthCare.jpeg";
import furniture from "../../assets/TopCategories/furnture.jpeg";

import img1 from "src/assets/sellingSlider/1.jpeg";
import img2 from "src/assets/sellingSlider/2.jpeg";

const data = [
  {
    color: "#F39900",
    title: "تلفزيون زكي",
    img: smart,
    products: [
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
    ],
  },
  {
    color: "#B054E7",
    title: "اثاث",
    img: furniture,
    products: [
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
    ],
  },
  {
    color: "#049AB9",
    title: "الرعاية الصحبة",
    img: healthCare,
    products: [
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
    ],
  },
];

export default function TopCategories() {
  return (
    <div className="bg-mainSectionColor">
      <div className="container mx-auto grid grid-cols-1 gap-y-6 gap-x-6 !py-(--section-padding) lg:grid-cols-3">
        {data.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </div>
    </div>
  );
}
