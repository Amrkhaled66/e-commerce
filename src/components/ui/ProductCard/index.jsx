import { Link } from "react-router-dom";
import { IoStar, IoStarHalf } from "react-icons/io5";
import AddToCart from "src/components/ui/Buttons/AddToCart";
import AddToFav from "src/components/ui/Buttons/AddToFav";
import clsx from "clsx"; // Optional, if you're using clsx for class management

export default function ProductCard({
  img,
  title,
  sellingCount,
  price,
  discountedPrice,
  stars = 4.5,
  ProductImages,
  isHorizontal,
  isFilterCard,
}) {
  const renderStars = () => (
    <div className="flex gap-x-1">
      {Array.from({ length: 5 }, (_, i) => {
        if (i + 1 <= Math.floor(stars)) return <IoStar key={i} color="gold" />;
        if (i < stars && i + 1 > stars)
          return (
            <IoStarHalf
              key={i}
              style={{ transform: "scaleX(-1)" }}
              color="gold"
            />
          );
        return <IoStar key={i} color="lightgray" />;
      })}
    </div>
  );

  const renderImageIndicators = () => (
    <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-x-2">
      {Array.from({ length: ProductImages }).map((_, index) => (
        <button
          key={index}
          className={clsx(
            "h-2 w-2 cursor-pointer rounded-full border border-black",
            index === 0 && "bg-black",
          )}
        />
      ))}
    </div>
  );

  return (
    <div
      className={clsx(
        "border-stroke mx-auto !h-fit overflow-hidden rounded-2xl border",
        isHorizontal
          ? "flex h-fit w-full"
          : isFilterCard
            ? "h-[380px] w-[165px] sm:h-[401px] sm:!w-[215px] md:h-[476px] md:!w-[245px]"
            : "h-[476px] w-[233px] sm:w-[235px] md:w-[245px]",
      )}
    >
      <Link to="/product" className={clsx(isHorizontal && "flex")}>
        <div
          className={clsx(
            "border-stroke relative gap-y-4 overflow-hidden",
            isHorizontal
              ? "border-l"
              : ` ${!isFilterCard && "h-[290px]"} border-b`,
            isFilterCard && "h-[220px] w-full sm:h-[231px] lg:h-[290px]",
          )}
        >
          <AddToFav />
          <img
            className="sm:object-fit mx-auto h-full w-full object-contain"
            src={img}
            alt={title}
          />
          {renderImageIndicators()}
        </div>
      </Link>

      <div
        className={clsx(
          "flex flex-col justify-between p-3",
          isFilterCard ? "h-[163px] sm:h-[170px] lg:h-[186px]" : "h-[186px]",
        )}
      >
        <Link to="/product">
          <p className="line-clamp-2 text-sm leading-relaxed font-[500] md:text-base">
            {title}
          </p>
        </Link>

        <div className="space-y-[4px]">
          <div className="flex gap-x-2 md:gap-x-3">
            {renderStars()}
            <p className="font-inter text-sm">({sellingCount})</p>
          </div>

          <div className="flex items-end gap-x-2 text-nowrap">
            <span className="text-xs font-bold sm:text-sm md:text-base">
              {price} جنية
            </span>
            <span className="text-xs line-through sm:text-sm">
              {price - discountedPrice}
            </span>
            <span
              className={clsx(
                "text-main-color-700 tracking-widest sm:text-sm",
                isFilterCard ? "text-[10px]" : "text-xs",
              )}
            >
              {(price - discountedPrice) / 100}% خصم
            </span>
          </div>
        </div>

        <AddToCart />
      </div>
    </div>
  );
}
