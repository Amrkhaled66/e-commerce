import { useState } from "react";
import FilterSideBar from "src/components/FilterProductPage/FilterSideBar";
import ProductList from "src/components/FilterProductPage/ProductList";
import useProductFilter from "src/hooks/useProductFilter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FaFilter, FaArrowLeftLong } from "react-icons/fa6";

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

  // Pagination Logic
  const getVisiblePages = () => {
    if (totalPages <= 6)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    if (currentPage <= 5) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    } else if (currentPage >= totalPages - 4) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
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
      <div className="container mx-auto flex flex-col gap-y-6 !pt-(--section-padding-mobile) lg:!py-(--section-padding)">
        <div className="flex min-h-screen justify-between gap-x-6">
          <FilterSideBar
            setFilterState={setFilterState}
            filterState={filterState}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          <div className="flex flex-1 flex-col gap-y-6 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-subtitle font-[500]">
                {filteredProducts.length} نتائج البحث"عروض التسوق"
              </h2>
              <button className="border-stroke flex gap-x-2 rounded-2xl border px-6 py-2 text-sm font-[500] outline-0">
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
              <div className="mt-6 flex justify-center space-x-2">
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
        {filterState && (
          <div
            onClick={() => setFilterState(false)}
            className="fixed top-0 right-0 z-[10000] h-screen w-screen bg-black opacity-50"
          ></div>
        )}
      </div>
    </div>
  );
}
