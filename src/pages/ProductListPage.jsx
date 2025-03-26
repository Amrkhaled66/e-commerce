import { Icon } from "@iconify/react/dist/iconify.js";

import CategoryElement from "src/components/ui/CategoryElement";

import data from "src/components/HomePage/HeroSection/CategorySlider/data";
export default function ProductList() {
  return (
    <div className="font-cairo pt-(--navbar-height-mobile) lg:pt-(--navbar-height)">
      <div className="container mx-auto flex flex-col gap-y-6 !pt-(--section-padding-mobile) lg:!py-(--section-padding)">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold md:text-xl lg:text-2xl">
            جميع المنتجات
          </p>
          <button className="border-stroke flex items-center gap-x-2 rounded-2xl border px-3 py-2 lg:px-6">
            <Icon
              icon="mi:filter"
              width="24"
              height="24"
              style={{ color: "#000" }}
            />
            <span>ترتيب حسب</span>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-x-2 gap-y-6 overflow-hidden md:grid-cols-5 md:gap-x-5 lg:gap-x-6 xl:grid-cols-9">
          {data.map((category) => (
            <CategoryElement
              key={category.id}
              id={category.id}
              title={category.title}
              img={category.img}
            />
          ))}
          {data.map((category) => (
            <CategoryElement
              key={category.id}
              id={category.id}
              title={category.title}
              img={category.img}
            />
          ))}
          {data.map((category) => (
            <CategoryElement
              key={category.id}
              id={category.id}
              title={category.title}
              img={category.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
