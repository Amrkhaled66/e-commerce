import React from 'react';
import DiscountInput from 'src/components/CartPage/CartSummary/DiscountInput';
import PriceDetails from 'src/components/CartPage/CartSummary/PriceDetails';
import TotalPrice from 'src/components/CartPage/CartSummary/TotalPrice';
import CartButtons from 'src/components/CartPage/CartSummary/CartButtons';

const CartSummary = ({ quantity, cartTotal }) => {
  return (
    <div className="h-fit w-full space-y-[25px] rounded-2xl border border-gray-200 bg-white p-5 shadow-md lg:w-[32%]">
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