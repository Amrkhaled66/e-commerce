import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

/**
 * Option Selector Component
 */
const OptionSelector = ({
  label,
  options,
  selected,
  onSelect,
  suffix = "",
}) => (
  <div className="space-y-2">
    <p className="text-subtitle text-sm font-bold">
      <span className="mr-1 text-base">{label} :</span> {selected}
    </p>
    <div className="flex flex-wrap gap-2">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          className={`border-main-color cursor-pointer rounded-2xl border px-3 py-2 text-sm transition-all duration-300 lg:text-base ${
            selected === option
              ? "bg-main-color-fade text-white"
              : "text-main-color bg-white"
          }`}
        >
          {option} {suffix}
        </button>
      ))}
    </div>
  </div>
);

/**
 * Image Selector Component
 */
const ImageSelector = ({ images, activeImage, onSelect }) => (
  <div className="space-y-2">
    <p>أسم اللون : Blue </p>
    <ul className="flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-3">
      {images.map((image, index) => (
        <li
          key={index}
          className={`${
            activeImage === image ? "border-main-color" : "border-stroke"
          } flex h-[100px] w-[72px] items-center overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:brightness-110`}
        >
          <button onClick={() => onSelect(image)}>
            <img
              className="w-full cursor-pointer object-fill"
              src={image}
              alt=""
            />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Main Product Info Component
 */
export default function ProductInfo({ product }) {
  const [selectedOptions, setSelectedOptions] = useState({
    model: product.modelName[0],
    storage: product.storage[0],
    version: product.version[0],
    activeImage: product.images[0],
  });

  const handleSelect = (key, value) => {
    setSelectedOptions((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="border-stroke order-3 flex w-full flex-col gap-y-5 rounded-2xl bg-white lg:order-none lg:w-[40%] lg:border lg:px-3 lg:py-5 lg:drop-shadow-lg">
      {/* Product Details */}
      <div className="flex flex-col gap-y-5 lg:gap-y-2">
        <p className="hidden font-[600] lg:block">{product.seller}</p>
        <p className="hidden text-xl font-[600] lg:block">{product.title}</p>

        {/* Stars & Reviews */}
        <div className="hidden gap-4 lg:flex">
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

        {/* Price */}
        <p className="hidden text-xl font-bold lg:flex">
          {product.price}
          <span className="text-subtitle mr-1 text-base font-[600]">جنية</span>
        </p>
      </div>

      {/* Selectable Options */}
      <div className="space-y-5">
        <OptionSelector
          label="أسم الموديل"
          options={product.modelName}
          selected={selectedOptions.model}
          onSelect={(value) => handleSelect("model", value)}
        />
        <OptionSelector
          label="حجم التخزين"
          options={product.storage}
          selected={selectedOptions.storage}
          onSelect={(value) => handleSelect("storage", value)}
          suffix="جيجا بايت"
        />
        <ImageSelector
          images={product.images}
          activeImage={selectedOptions.activeImage}
          onSelect={(value) => handleSelect("activeImage", value)}
        />
        <OptionSelector
          label="اٍلاصدار"
          options={product.version}
          selected={selectedOptions.version}
          onSelect={(value) => handleSelect("version", value)}
        />
      </div>
    </div>
  );
}
