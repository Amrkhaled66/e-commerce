import { useState } from "react";

import FilterSideBar from "src/sections/FilterProductsPage/FilterSideBar";
import ProductList from "src/sections/FilterProductsPage/ProductList";
import useProductFilter from "src/hooks/useProductFilter";

import { Icon } from "@iconify/react/dist/iconify.js";
import { FaFilter, FaArrowLeftLong } from "react-icons/fa6";

import Overlay from "src/components/ui/OverLay";
export default function ProductFilterPage() {
  const {
    currentPage,
    setCurrentPage,
    filters,
    setFilters,
    filteredProducts,
    totalPages,
    paginatedProducts,
    handleFilterChange,
  } = useProductFilter();

  const [filterState, setFilterState] = useState(false);

  const getVisiblePages = () => {
    if (totalPages <= 6)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    } else if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, "...", currentPage, currentPage + 1, "...", totalPages];
    }
  };

  const handleEllipsisClick = (type) => {
    if (type === "back") {
      setCurrentPage((prev) => Math.max(1, prev - 2));
    } else {
      setCurrentPage((prev) => Math.min(totalPages, prev + 2));
    }
  };

  return (
    <div className="font-cairo pt-(--navbar-height-mobile) lg:pt-(--navbar-height)">
      <div className="container flex flex-col gap-y-6 !pt-(--section-padding-mobile) lg:!py-(--section-padding)">
        <div className="flex min-h-screen gap-x-7">
          <FilterSideBar
            setFilterState={setFilterState}
            filterState={filterState}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          <div className="flex max-w-[1050px] flex-1 flex-col gap-y-6 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-subtitle text-xs font-[500] md:text-base">
                {filteredProducts.length} نتائج البحث"عروض التسوق"
              </h2>
              <button className="border-stroke hidden gap-x-2 rounded-2xl border px-6 py-2 text-sm font-[500] outline-0 md:flex">
                <Icon
                  icon="mage:filter"
                  width="24"
                  height="24"
                  style={{ color: "#000" }}
                />
                ترتيب حسب
              </button>
            </div>

            {filteredProducts.length === 0 ? (
              <p className="text-center">لا توجد منتجات مطابقة للبحث</p>
            ) : (
              <ProductList products={paginatedProducts} />
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mx-auto flex gap-x-2">
                {/* Left Arrow */}
                <button
                  className="border-stroke rounded-full border p-2.5"
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <FaArrowLeftLong
                    className={currentPage === 1 ? "text-black/40" : ""}
                    style={{ rotate: "180deg" }}
                  />
                </button>

                {getVisiblePages().map((page, index) => (
                  <button
                    key={index}
                    className={`border-stroke rounded-lg border px-2.5 py-2 ${
                      currentPage === page ? "!border-main-color" : ""
                    }`}
                    onClick={() =>
                      page === "..."
                        ? handleEllipsisClick(index === 1 ? "back" : "forward")
                        : setCurrentPage(page)
                    }
                  >
                    {page}
                  </button>
                ))}

                {/* Right Arrow */}
                <button
                  className="border-stroke rounded-full border p-2.5"
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                >
                  <FaArrowLeftLong
                    className={
                      currentPage === totalPages ? "text-subtitle" : ""
                    }
                  />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile filter */}
        <div className="bg-main-color fixed bottom-[85px] left-1/2 z-50 flex translate-x-[-50%] gap-x-2 rounded-[50px] px-6 py-2 text-white lg:hidden">
          <button className="r-stroke flex items-center gap-x-2 pl-2 text-sm font-[500] text-nowrap outline-0">
            ترتيب حسب
            <Icon
              icon="mage:filter"
              width="24"
              height="24"
              style={{ color: "#fff" }}
            />
          </button>
          <button
            onClick={() => setFilterState(true)}
            className="flex items-center gap-x-2 border-r border-white pr-2 text-sm font-[500]"
          >
            Filter
            <FaFilter className="h-6 w-6" />
          </button>
        </div>

        {/* Overlay */}
        {filterState && <Overlay onClick={() => setFilterState(false)} />}
      </div>
    </div>
  );
}
