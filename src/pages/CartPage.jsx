import CartInfo from "src/sections/CartPage/CartInfo";
import CartSummary from "src/sections/CartPage/CartSummary";

import img1 from "src/assets/productPage/1.jpeg";

const products = [
  {
    img: img1,
    seller: "أبل",
    title:
      "آيفون 15 بسعة 128 جيجابايت، أزرق، 5G مع تطبيق FaceTime - إصدار عالمي",

    discountedPrice: 9000,
    price: 10000,
    quantity: 1,
    discount: 2,
  },
  {
    img: img1,
    seller: "أبل",
    title:
      "آيفون 15 بسعة 128 جيجابايت، أزرق، 5G مع تطبيق FaceTime - إصدار عالمي",

    discountedPrice: 9000,
    price: 10000,
    quantity: 1,
    discount: 2,
  },
  {
    img: img1,
    seller: "أبل",
    title:
      "آيفون 15 بسعة 128 جيجابايت، أزرق، 5G مع تطبيق FaceTime - إصدار عالمي",

    discountedPrice: 9000,
    price: 10000,
    quantity: 1,
    discount: 2,
  },
];

export default function CartPage() {
  return (
    <div className="lg:bg-mainSectionColor font-cairo !pt-(--navbar-height-mobile) lg:!pt-(--navbar-height)">
      <div className="container gap-y-8 lg:gap-y-14 mx-auto flex flex-col !py-(--section-padding)">
        <h4 className="text-[28px] font-bold">
          عربة التسوق
          <span className="text-subtitle mr-3 text-xl font-[500]">
            ({products.length}منتج)
          </span>
        </h4>
        <div className="flex flex-col gap-y-7 gap-x-8 justify-between lg:flex-row">
          <CartInfo cart={products} />
          <CartSummary cartTotal={40000} quantity={products.length} />
        </div>
      </div>
    </div>
  );
}
