import { useState } from "react";

// Icons
import { CiSearch } from "react-icons/ci";
import { IoStar, IoStarHalf } from "react-icons/io5";
import { Icon } from "@iconify/react/dist/iconify.js";

import FilterElement from "./FilterElement";
import {
  brands,
  size,
  ratings,
  colors,
  productStates,
  categories,
} from "./data";

export default function FilterSideBar({
  filters,
  onFilterChange,
  filterState,
  setFilterState,
}) {
  const [activeFilters, setActiveFilters] = useState([]);
  const [brandSearchTerm, setBrandSearchTerm] = useState("");
  const [priceInputs, setPriceInputs] = useState(filters.priceRange);
  const [activeCategory, setActiveCategory] = useState(null);


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
    <aside
      className={`border-stroke filter-sidebar z-[100000] w-[320px] space-y-4 gap-y-4 overflow-y-scroll border bg-white p-4 lg:relative lg:z-0 lg:h-fit lg:rounded-2xl ${filterState ? "fixed top-0 right-0 h-screen" : "hidden lg:block"} `}
    >
      {/* Close Button */}
      <div className="flex items-center justify-between font-bold lg:hidden">
        <p>الفلتر</p>
        <button onClick={() => setFilterState(false)} className="text-subtitle">
          <Icon
            icon="zondicons:close-outline"
            width="18"
            height="18"
            style={{ color: " #000" }}
          />
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-y-4">
        {/* Categories Filter */}
        <FilterElement
          isOpen={activeFilters.includes("الفئة")}
          onToggleMenu={() =>
            setActiveFilters((prev) => {
              if (prev.includes("الفئة")) {
                return prev.filter((item) => item !== "الفئة");
              }
              return [...prev, "الفئة"];
            })
          }
          filterName={"الفئة"}
        >
          {categories.map((category) => (
            <div>
              <button
                className={`text-subtitle w-full text-right  ${activeCategory === category.title?" !text-blue-700  border-b border-b-stroke ":" "} `}
                onClick={() =>
                  setActiveCategory((prev) =>
                    prev === category.title ? null : category.title,
                  )
                }
              >
                + {category.title}
              </button>
              <div
                className={` ${activeCategory === category.title ? "max-h-[200px]" : "max-h-[0px]"} pt-1 flex flex-col gap-y-2 overflow-hidden pr-3 transition-all duration-300`}
              >
                {category.subCategories.map((subCategory) => (
                  <div className="space-x-3">
                    <input
                      type="checkbox"
                      className="border-stroke cursor-pointer rounded-sm border outline-0"
                      id={`category-${subCategory}`}
                    />
                    <label
                      htmlFor={`category-${subCategory}`}
                      className="text-subtitle cursor-pointer text-sm font-[500]"
                    >
                      {subCategory}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </FilterElement>

        {/* Brand Filter */}
        <FilterElement
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
        </FilterElement>

        {/* Price Filter */}
        <FilterElement
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
              هيا
            </button>
          </form>
        </FilterElement>

        {/* Rating Filter */}
        <FilterElement
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
          <div className="space-y-[12px]">
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
        </FilterElement>

        {/* Size Filter */}
        <FilterElement
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
        </FilterElement>

        {/* Color Filter */}
        <FilterElement
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
            {colors.map((color) => {
              const isChecked = filters.colors.includes(color.name);
              return (
                <div className="flex items-center gap-x-2" key={color.name}>
                  <label
                    htmlFor={`color-${color.name}`}
                    className="flex cursor-pointer items-center gap-x-2"
                  >
                    {isChecked ? (
                      <input
                        type="checkbox"
                        checked={filters.colors.includes(color.name)}
                        onChange={() =>
                          handleCheckboxChange("colors", color.name)
                        }
                        id={`color-${color.name}`}
                        className="h-4 w-4 rounded-[4px] border"
                      />
                    ) : (
                      <input
                        className="h-4 w-4 rounded-[4px] border border-gray-300"
                        style={{
                          backgroundColor: color.hex,
                          appearance: "none",
                        }}
                        type="checkbox"
                        onChange={() =>
                          handleCheckboxChange("colors", color.name)
                        }
                      />
                    )}
                    <span className="text-subtitle text-sm font-[500]">
                      {color.name}
                    </span>
                  </label>
                </div>
              );
            })}
          </div>
        </FilterElement>

        {/* Product State Filter */}
        <FilterElement
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
        </FilterElement>
      </div>
    </aside>
  );
}
