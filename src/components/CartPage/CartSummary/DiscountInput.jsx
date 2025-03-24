import React from 'react';

const DiscountInput = () => (
  <div className="flex items-center">
    <input
      type="text"
      placeholder="ادخل كود الخصم"
      className="text-subtitle flex-1 rounded-r-2xl border border-gray-300 p-2 py-2 focus:outline-none"
    />
    <button className="bg-main-color rounded-l-2xl px-4 py-2 font-semibold text-white">
      تطبيق
    </button>
  </div>
);

export default DiscountInput; 