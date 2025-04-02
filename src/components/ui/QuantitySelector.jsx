import { IoIosAdd, IoIosRemove } from "react-icons/io";

const QuantitySelector = ({
  quantity,
  setQuantity,
  isHorizontal,
  className = " ",
}) => {
  return (
    <div
      className={`flex ${isHorizontal ? "flex-col gap-x-2  lg:flex-row lg:items-center" : "gap-y-2 flex-col"} ${className} `}
    >
      <p className="text-xs font-bold lg:text-base">الكمية </p>

      <div className="flex w-fit items-center gap-2 rounded-2xl border border-gray-300  px-3">
        <button
          className="cursor-pointer text-black disabled:opacity-50"
          onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          disabled={quantity <= 1}
        >
          <IoIosRemove size={20} />
        </button>
        <span className="h-full bg-[#F4F4F4] px-4 py-1 text-lg font-semibold sm:py-2">
          {quantity}
        </span>
        <button
          className="cursor-pointer text-black disabled:opacity-50"
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          <IoIosAdd size={20} />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;
