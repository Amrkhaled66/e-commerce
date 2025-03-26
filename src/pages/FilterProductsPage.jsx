import { useState } from "react";
import ProductCard from "src/components/ui/ProductCard";
import FilterSideBar from "src/components/FilterProductPage/FilterSideBar";

import { products } from "src/components/FilterProductPage/data";

import { Icon } from "@iconify/react/dist/iconify.js";

const itemsPerPage = 12;

export default function ProductFilterPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    brands: [],
    priceRange: { min: 0, max: 2000 },
    ratings: [],
    sizes: [],
    colors: [],
    productStates: [],
  });

  const filteredProducts = products.filter((product) => {
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    if (
      product.price < filters.priceRange.min ||
      product.price > filters.priceRange.max
    ) {
      return false;
    }

    if (
      filters.ratings.length > 0 &&
      !filters.ratings.some(
        (r) => product.starts >= r && product.starts < r + 0.5,
      )
    ) {
      return false;
    }

    if (filters.sizes.length > 0 && !filters.sizes.includes(product.size)) {
      return false;
    }

    if (filters.colors.length > 0 && !filters.colors.includes(product.color)) {
      return false;
    }

    if (
      filters.productStates.length > 0 &&
      !filters.productStates.includes(product.productState)
    ) {
      return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => {
      if (filterType === "priceRange") {
        return { ...prev, priceRange: value };
      }

      return {
        ...prev,
        [filterType]: prev[filterType].includes(value)
          ? prev[filterType].filter((item) => item !== value)
          : [...prev[filterType], value],
      };
    });
    setCurrentPage(1);
  };

  return (
    <div className="font-cairo pt-(--navbar-height-mobile) lg:pt-(--navbar-height)">
      <div className="container mx-auto flex flex-col gap-y-6 !pt-(--section-padding-mobile) lg:!py-(--section-padding)">
        <div className="flex min-h-screen justify-between gap-x-6">
          <FilterSideBar
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
              <p>لا توجد منتجات مطابقة للبحث</p>
            ) : (
              <>
                <div
                  key={paginatedProducts}
                  className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                >
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      img={product.img}
                      title={product.title}
                      starts={product.starts}
                      sellingCount={product.sellingCount}
                      price={product.price}
                      discountedPrice={product.discountedPrice}
                      ProductImages={product.ProductImages}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-6 flex justify-center space-x-2">
                    <button
                      className="rounded bg-gray-300 px-3 py-1"
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                    >
                      السابق
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        className={`rounded px-3 py-1 ${
                          currentPage === index + 1
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        }`}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}
                    <button
                      className="rounded bg-gray-300 px-3 py-1"
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                    >
                      التالي
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
