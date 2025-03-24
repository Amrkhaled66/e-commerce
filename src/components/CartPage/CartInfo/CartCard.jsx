import QuantitySelector from "src/components/ui/QuantitySelector";
import ActionButton from "./ActionButton";

import { useState } from "react";


import { HiOutlineTrash } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";


const CartCard = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  return (
    <div className="border-stroke relative flex rounded-2xl border bg-white p-4">
      {/* Product Image */}
      <div className="h-fit w-[83px] sm:w-[130px]">
        <img className="w-full" src={product.img} alt={product.title} />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between gap-y-4">
        {/* Title & Pricing */}
        <div className="flex flex-col justify-between gap-y-3 sm:flex-row">
          <p className="text-sm leading-relaxed font-semibold sm:text-base lg:w-[71%] lg:text-lg">
            {product.title}
          </p>
          <div>
            <p className="text-nowrap">
              <span className="text-xl font-bold lg:text-[22px]">
                {product.price}
              </span>
              <span className="text-subtitle font-medium"> جنيه</span>
            </p>
            {product.discount > 0 && (
              <p className="flex space-x-2">
                <span className="text-subtitle text-sm line-through">
                  {product.discountedPrice}
                </span>
                <span className="text-main-color text-sm">
                  {product.discount}% خصم
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Seller */}
        <p className="text-subtitle text-sm font-medium lg:text-lg">
          البائع: <span className="font-bold text-black">{product.seller}</span>
        </p>

        {/* Actions & Quantity */}
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-end lg:items-center">
          <div className="flex items-center gap-x-2">
            <ActionButton icon={<HiOutlineTrash />} label="حذف" />
            <ActionButton icon={<FaRegHeart />} label="أضافة الي المفضلة" />
          </div>
          <QuantitySelector
            className="translate-x-20 sm:translate-x-0"
            isHorizontal
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
