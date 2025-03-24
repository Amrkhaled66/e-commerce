import React from 'react';
import getArabicPlural from "src/utils/getArabicPlural";

const PriceDetails = ({ quantity, cartTotal }) => (
  <div className="border-stroke space-y-2 border-b pb-4">
    <div className="text-subtitle flex justify-between">
      <span>المجموع الفرعي {getArabicPlural("منتج", quantity)}</span>
      <span className="font-medium">{cartTotal} جنيه</span>
    </div>
    <div className="text-subtitle flex justify-between">
      <span>الشحن</span>
      <span className="text-main-color">مجانا</span>
    </div>
    <div className="text-subtitle flex justify-between">
      <span>الخصم</span>
      <span className="font-medium">0.00 جنيه</span>
    </div>
  </div>
);

export default PriceDetails; 