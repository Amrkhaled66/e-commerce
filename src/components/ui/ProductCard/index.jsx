import { GrCart } from "react-icons/gr";
import { AiOutlineHeart } from "react-icons/ai";

export default function ProductCard({
  img,
  title,
  sellingCount,
  price,
  discountedPrice,
  starts,
  ProductImages,
}) {
  return (
    <div className="w-fit mx-auto border border-stroke rounded-2xl  overflow-hidden    h-full">
      <div className="  relative border-b border-stroke ">
        <div className=" absolute top-3 right-4 bg-white rounded-xl border-stroke border px-2.5 py-2 text-2xl ">
          <AiOutlineHeart />
        </div>
        <img className="w-full object-contain " src={img} alt={title} />
        <div className=" gap-x-2 bottom-2 flex  left-1/2 -translate-x-1/2   absolute ">
          {Array.from({ length: ProductImages }).map((_, index) => (
            <button
              className={`${
                index === 0 ? " bg-black " : " "
              } h-2 w-2 border cursor-pointer border-black rounded-full`}
            ></button>
          ))}
        </div>
      </div>
      <div className="p-3 flex flex-col  gap-y-4 ">
        <p className="font-[500] leading-relaxed">{title}</p>
        <div className=" space-y-1">
          <div className=" gap-x-3 flex">
            <div className=" flex gap-[2px]">
              {Array.from({ length: starts }).map((_, index) => (
                <div className="star"></div>
              ))}
            </div>
            <p className="text-sm font-inter">({sellingCount})</p>
          </div>
          <div className="flex items-end gap-x-2">
            <span className="font-bold">{price} جنية</span>
            <span className=" line-through text-xs ">
              {price - discountedPrice}
            </span>
            <span className=" text-main-color-700 tracking-widest text-sm ">
              {(price - discountedPrice) / 100}%خصم
            </span>
          </div>
        </div>
        <button className="flex items-center rounded-2xl w-full cursor-pointer mx-auto py-2 px-4 justify-center gap-x-2  font-bold font-cairo bg-main-color text-white">
          <span className="text-xl">
            <GrCart />
          </span>
          اٍضافة اٍلي العربة
        </button>
      </div>
    </div>
  );
}
