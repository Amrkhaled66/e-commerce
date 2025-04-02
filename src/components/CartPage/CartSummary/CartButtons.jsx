import React from "react";

const CartButtons = () => (
  <div className="mt-5 space-y-3">
    <button className="bg-main-color w-full rounded-2xl py-3 text-base font-bold text-white md:text-lg">
      صفحة الدفع
    </button>
    <button className="border-main-color text-main-color w-full rounded-2xl border py-3 text-base font-bold md:text-lg">
      أكمل التسوق
    </button>
  </div>
);

export default CartButtons;
