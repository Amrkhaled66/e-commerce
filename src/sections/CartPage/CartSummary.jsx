import React from 'react';
import DiscountInput from 'src/components/CartPage/CartSummary/DiscountInput';
import PriceDetails from 'src/components/CartPage/CartSummary/PriceDetails';
import TotalPrice from 'src/components/CartPage/CartSummary/TotalPrice';
import CartButtons from 'src/components/CartPage/CartSummary/CartButtons';

const CartSummary = ({ quantity, cartTotal }) => {
  return (
    <div className="h-fit  space-y-[25px] w-full lg:w-[450px] rounded-2xl border border-gray-200 bg-white p-5 shadow-md sm:w-full ">
      <h2 className="text-2xl font-bold">ملخص الطلب</h2>
      <div className="space-y-[16px]">
        <DiscountInput />
        <PriceDetails quantity={quantity} cartTotal={cartTotal} />
      </div>
      <TotalPrice cartTotal={cartTotal} />
      <CartButtons />
    </div>
  );
};

export default CartSummary; 