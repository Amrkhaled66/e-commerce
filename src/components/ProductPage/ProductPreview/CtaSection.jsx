import { useState } from "react";

import { IoIosAdd, IoIosRemove, IoIosArrowDown } from "react-icons/io";

import AddToCart from "src/components/ui/Buttons/AddToCart";

import SocialIcons from "src/components/ui/SocialIcons";

import { Icon } from "@iconify/react/dist/iconify.js";

import QuantitySelector from "src/components/ui/QuantitySelector";

function PaymentMethods() {
  return (
    <div className="flex flex-col items-center gap-y-3">
      {/* Bigger Icons Row */}
      <div className="flex items-center gap-x-5">
        <Icon
          icon="logos:paypal"
          className="border-stroke rounded-md border px-4 py-2"
          width="70"
          height="55"
        />
        <Icon
          icon="logos:mastercard"
          className="border-stroke rounded-md border px-4 py-2"
          width="70"
          height="55"
        />

        <Icon
          icon="cib:visa"
          className="border-stroke rounded-md border px-4 py-2"
          width="70"
          height="55"
          style={{ color: "#172B85" }}
        />
      </div>

      {/* Smaller Icons Row */}
      <div className="flex items-center gap-x-5">
        <Icon
          className="border-stroke rounded-md border p-1"
          icon="logos:mastercard"
          width="32"
          height="32"
        />
        <Icon
          className="border-stroke rounded-md border p-1"
          icon="logos:paypal"
          width="32"
          height="32"
        />

        <Icon
          icon="cib:visa"
          width="32"
          height="32"
          className="border-stroke rounded-md border p-1"
          style={{ color: "#172B85" }}
        />
        <Icon
          className="border-stroke rounded-md border p-1"
          icon="logos:google-pay"
          width="32"
          height="32"
        />
      </div>
    </div>
  );
}

export default function CtaSection({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex h-fit w-full flex-col gap-y-6 lg:w-[24%]">
      <div className="flex flex-col gap-4 gap-y-5 lg:hidden">
        {/* Price */}
        <p className="text-xl font-bold">
          {product.price}
          <span className="text-subtitle mr-1 text-base font-[600]">جنية</span>
        </p>
        <div className="flex gap-x-4">
          <p className="flex items-center gap-[2px]">
            {product.stars}
            {Array.from({ length: product.stars }).map((_, index) => (
              <div key={index} className="star h-[16px] w-[16px]"></div>
            ))}
          </p>
          <p className="text-main-color flex items-center gap-x-1 text-sm">
            {product.reviews.length} تقييم
            <IoIosArrowDown />
          </p>
        </div>
      </div>

      {/* CtA */}
      <div className="border-stroke flex flex-col gap-y-5 rounded-2xl bg-white lg:border lg:px-5 lg:py-3">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        <div className="space-y-6">
          <div className="w-full space-y-3">
            <AddToCart />
            <button className="font-cairo text-main-color border-main-color mx-auto flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-2xl border bg-white px-4 py-2 text-sm font-bold text-nowrap transition-all duration-300 hover:brightness-110 lg:text-base">
              اشتري الأن
            </button>
          </div>
          <div className="border-stroke border-t pt-3">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Payment Promotion */}
      <div className="border-stroke space-y-8 rounded-2xl bg-white px-5 py-3 lg:border">
        <p className="text-center font-[700]">الدفع الامن والموثوق</p>
        <PaymentMethods />
      </div>
    </div>
  );
}
