import React from 'react';

const TotalPrice = ({ cartTotal }) => (
  <div className="mt-4 flex items-center justify-between text-lg font-bold">
    <span>المجموع</span>
    <span className="flex items-center gap-x-1">
      {cartTotal}
      <span className="text-subtitle text-sm font-[500]"> جنية</span>
    </span>
  </div>
);

export default TotalPrice; 