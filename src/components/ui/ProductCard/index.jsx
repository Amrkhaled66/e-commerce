import AddToCart from "src/components/ui/Buttons/AddToCart";
import AddToFav from "src/components/ui/Buttons/AddToFav";

import { Link } from "react-router-dom";

import Stars from "../Stars";
import { IoStar, IoStarHalf } from "react-icons/io5";

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
      className={`border-stroke mx-auto h-[380px] overflow-hidden rounded-2xl border md:h-[400px] lg:h-[476px] ${
        isHorizontal ? "flex h-fit w-full" : "w-[100%]"
      }`}
    >
      <Link to="/product" className={`${isHorizontal ? "flex" : ""}`}>
        <div
          className={`relative gap-y-4 overflow-hidden ${
            isHorizontal
              ? "border-l"
              : "h-[220px] border-b md:h-[230px] lg:h-[290px]"
          } border-stroke`}
        >
          <AddToFav />
          <img className="object-fit mx-auto w-full" src={img} alt={title} />
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-x-2">
            {Array.from({ length: ProductImages }).map((_, index) => (
              <button
                key={index}
                className={`${
                  index === 0 ? "bg-black" : ""
                } h-2 w-2 cursor-pointer rounded-full border border-black`}
              ></button>
            ))}
          </div>
        </div>
      </Link>

      <div className="flex h-[163px] flex-col justify-between p-3 md:h-[170px] lg:h-[186px]">
        <Link to="product">
          <p className="line-clamp-2 text-sm leading-relaxed font-[500] md:text-base">
            {title}
          </p>
        </Link>

        <div className="space-y-[4px]">
          <div className="flex  gap-x-2 md:gap-x-3">
            <div className=" flex gap-x-1 " >
              {Array.from({ length: 5 }, (_, i) => {
                if (i + 1 <= Math.floor(stars)) {
                  return <IoStar key={i} color="gold" />;
                } else if (i < stars && i + 1 > stars) {
                  return (
                    <IoStarHalf
                      key={i}
                      style={{ transform: "scaleX(-1)" }}
                      color="gold"
                    />
                  );
                } else {
                  return <IoStar key={i} color="lightgray" />;
                }
              })}
            </div>
            <p className="font-inter text-sm">({sellingCount})</p>
          </div>
          <div className="flex items-end gap-x-2 text-nowrap">
            <span className="text-sm font-bold md:text-base">{price} جنية</span>
            <span className="text-xs line-through md:text-xs">
              {price - discountedPrice}
            </span>
            <span className="text-main-color-700 text-xs tracking-widest md:text-sm">
              {(price - discountedPrice) / 100}% خصم
            </span>
          </div>
        </div>

        <AddToCart />
      </div>
    </div>
  );
}
