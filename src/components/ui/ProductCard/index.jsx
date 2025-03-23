import AddToCart from "src/components/ui/Buttons/AddToCart";
import AddToFav from "src/components/ui/Buttons/AddToFav";

import { Link } from "react-router-dom";

import Stars from "../Stars";
export default function ProductCard({
  img,
  title,
  sellingCount,
  price,
  discountedPrice,
  stars,
  ProductImages,
  isHorizontal,
}) {
  return (
    <div
      className={`border-stroke mx-auto h-fit overflow-hidden rounded-2xl border ${
        isHorizontal ? "flex w-full" : "w-[85%]"
      }`}
    >
      <Link to="product">
        <div
          className={`relative ${isHorizontal ? "border-l" : "border-b"} border-stroke`}
        >
          <AddToFav />
          <img className="h-full w-full object-cover" src={img} alt={title} />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-x-2">
            {Array.from({ length: ProductImages }).map((_, index) => (
              <button
                className={`${
                  index === 0 ? "bg-black" : " "
                } h-2 w-2 cursor-pointer rounded-full border border-black`}
              ></button>
            ))}
          </div>
        </div>
        <div className="flex h-auto flex-col justify-between gap-y-4 p-3">
          <p className="leading-relaxed font-[500]">{title}</p>
          <div className="space-y-1">
            <div className="flex gap-x-3">
              <Stars length={stars} />
              <p className="font-inter text-sm">({sellingCount})</p>
            </div>
            <div className="flex items-end gap-x-2">
              <span className="font-bold">{price} جنية</span>
              <span className="text-xs line-through">
                {price - discountedPrice}
              </span>
              <span className="text-main-color-700 text-sm tracking-widest">
                {(price - discountedPrice) / 100}%خصم
              </span>
            </div>
          </div>
        </div>
      </Link>
      <div className="w-full p-3">
        <AddToCart />
      </div>
    </div>
  );
}
