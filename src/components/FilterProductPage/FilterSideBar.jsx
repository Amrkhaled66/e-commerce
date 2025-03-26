import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { brands, size, ratings, colors, productStates } from "./data";

const Element = ({ children, filterName, isOpen, onToggleMenu }) => {
  return (
    <div className="space-y-[8px]">
      <div className="flex justify-between">
        <span className="font-[700]">{filterName}</span>
        <button
          className={` ${isOpen ? "-rotate-180" : " "} transition-all duration-300`}
          onClick={onToggleMenu}
        >
          <IoIosArrowDown />
        </button>
      </div>
      <div
        className={` ${isOpen ? "max-h-max" : "max-h-[0px]"} space-y-[12px] overflow-hidden`}
      >
        {children}
      </div>
    </div>
  );
};

export default function FilterSideBar({ filters, onFilterChange }) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [brandSearchTerm, setBrandSearchTerm] = useState("");
  const [priceInputs, setPriceInputs] = useState(filters.priceRange);

  const handleBrandSearch = (event) => {
    setBrandSearchTerm(event.target.value);
  };

  const handlePriceApply = () => {
    onFilterChange("priceRange", {
      min: Number(priceInputs.min),
      max: Number(priceInputs.max),
    });
  };

  const handlePriceInputChange = (type, value) => {
    setPriceInputs((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleCheckboxChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const filteredBrands = brands.filter((brand) =>
    brand.toLowerCase().includes(brandSearchTerm.toLowerCase()),
  );

  return (
    <aside className="border-stroke h-fit w-[320px] space-y-4 rounded-2xl border bg-white p-4">
      {/* Brand Filter */}
      <Element
        isOpen={activeFilters.includes("الماركة")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("الماركة")) {
              return prev.filter((item) => item !== "الماركة");
            }
            return [...prev, "الماركة"];
          })
        }
        filterName={"الماركة"}
      >
        <div className="border-stroke flex gap-x-2 rounded-2xl border p-2">
          <label className="flex items-center text-2xl" htmlFor="">
            <CiSearch />
          </label>
          <input
            onChange={handleBrandSearch}
            className="outline-0"
            placeholder="بحث"
            type="text"
          />
        </div>
        <div className="space-y-[12px]">
          {filteredBrands.map((brand) => (
            <div className="flex items-center space-x-[8px]" key={brand}>
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => handleCheckboxChange("brands", brand)}
                className="border-stroke cursor-pointer rounded-sm border outline-0"
                id={`brand-${brand}`}
              />
              <label
                htmlFor={`brand-${brand}`}
                className="text-subtitle cursor-pointer text-sm font-[500]"
              >
                {brand}
              </label>
            </div>
          ))}
        </div>
      </Element>

      {/* Price Filter */}
      <Element
        isOpen={activeFilters.includes("السعر")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("السعر")) {
              return prev.filter((item) => item !== "السعر");
            }
            return [...prev, "السعر"];
          })
        }
        filterName={"السعر"}
      >
        <form className="flex items-center justify-between">
          <input
            className="text-subtitle border-stroke w-[105px] rounded-2xl border p-2.5 text-sm outline-0"
            type="number"
            value={priceInputs.min}
            onChange={(e) => handlePriceInputChange("min", e.target.value)}
            min="0"
          />
          اٍلي
          <input
            className="text-subtitle border-stroke w-[105px] rounded-2xl border p-2.5 text-sm outline-0"
            type="number"
            value={priceInputs.max}
            onChange={(e) => handlePriceInputChange("max", e.target.value)}
            min={priceInputs.min}
          />
          <button
            type="button"
            className="text-main-color text-sm font-[700]"
            onClick={handlePriceApply}
          >
            تطبيق
          </button>
        </form>
      </Element>

      {/* Rating Filter */}
      <Element
        isOpen={activeFilters.includes("تقييم المنتج")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("تقييم المنتج")) {
              return prev.filter((item) => item !== "تقييم المنتج");
            }
            return [...prev, "تقييم المنتج"];
          })
        }
        filterName={"تقييم المنتج"}
      >
        <div className="space-y-2">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center gap-x-2">
              <input
                type="checkbox"
                checked={filters.ratings.includes(rating)}
                onChange={() => handleCheckboxChange("ratings", rating)}
                className="border-stroke cursor-pointer rounded-sm border outline-0"
                id={`rating-${rating}`}
              />
              <label
                htmlFor={`rating-${rating}`}
                className="flex cursor-pointer"
              >
                {Array.from({ length: 5 }, (_, i) => {
                  if (i + 1 <= Math.floor(rating)) {
                    return <IoStar key={i} color="gold" />;
                  } else if (i < rating && i + 1 > rating) {
                    return (
                      <IoStarHalf
                        key={i}
                        style={{ transform: "scaleX(-1)" }}
                        color="gold"
                      />
                    );
                  } else {
                    return <IoStar key={i} color="lightgray" />;
                  }
                })}
              </label>
            </div>
          ))}
        </div>
      </Element>

      {/* Size Filter */}
      <Element
        isOpen={activeFilters.includes("المقاس")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("المقاس")) {
              return prev.filter((item) => item !== "المقاس");
            }
            return [...prev, "المقاس"];
          })
        }
        filterName={"المقاس"}
      >
        <div className="space-y-[12px]">
          {size.map((sizeItem) => (
            <div className="flex items-center space-x-[8px]" key={sizeItem}>
              <input
                type="checkbox"
                checked={filters.sizes.includes(sizeItem)}
                onChange={() => handleCheckboxChange("sizes", sizeItem)}
                className="border-stroke cursor-pointer rounded-sm border outline-0"
                id={`size-${sizeItem}`}
              />
              <label
                htmlFor={`size-${sizeItem}`}
                className="text-subtitle cursor-pointer text-sm font-[500]"
              >
                {sizeItem}
              </label>
            </div>
          ))}
        </div>
      </Element>

      {/* Color Filter */}
      <Element
        isOpen={activeFilters.includes("اللون")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("اللون")) {
              return prev.filter((item) => item !== "اللون");
            }
            return [...prev, "اللون"];
          })
        }
        filterName={"اللون"}
      >
        <div className="grid grid-cols-2 gap-y-[12px]">
          {colors.map((color) => (
            <div className="flex items-center gap-x-2" key={color.name}>
              <input
                type="checkbox"
                checked={filters.colors.includes(color.name)}
                onChange={() => handleCheckboxChange("colors", color.name)}
                className="hidden"
                id={`color-${color.name}`}
              />
              <label
                htmlFor={`color-${color.name}`}
                className="flex cursor-pointer items-center gap-x-2"
              >
                <span
                  className="h-4 w-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                ></span>
                <span className="text-subtitle text-sm font-[500]">
                  {color.name}
                </span>
              </label>
            </div>
          ))}
        </div>
      </Element>

      {/* Product State Filter */}
      <Element
        isOpen={activeFilters.includes("حالة المنتج")}
        onToggleMenu={() =>
          setActiveFilters((prev) => {
            if (prev.includes("حالة المنتج")) {
              return prev.filter((item) => item !== "حالة المنتج");
            }
            return [...prev, "حالة المنتج"];
          })
        }
        filterName={"حالة المنتج"}
      >
        <div className="space-y-[12px]">
          {productStates.map((state) => (
            <div className="flex items-center space-x-[8px]" key={state}>
              <input
                type="checkbox"
                checked={filters.productStates.includes(state)}
                onChange={() => handleCheckboxChange("productStates", state)}
                className="border-stroke cursor-pointer rounded-sm border outline-0"
                id={`state-${state}`}
              />
              <label
                htmlFor={`state-${state}`}
                className="text-subtitle cursor-pointer text-sm font-[500]"
              >
                {state}
              </label>
            </div>
          ))}
        </div>
      </Element>
    </aside>
  );
}
