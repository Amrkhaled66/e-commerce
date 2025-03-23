import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="border-stroke hidden flex-1 rounded-full border-[1px] py-[1px] pr-3 pl-[2px] lg:flex">
      <button className="my-auto flex h-fit items-center gap-x-2 border-l-2 border-black pl-2">
        <div className="flex items-center gap-x-1">
          <span>
            <HiOutlineMapPin className="h-[22px] w-[22px]" />
          </span>
          <span className="text-[14px] font-[500]">جميع الفئات</span>
        </div>
        <div>
          <IoIosArrowDown className="h-[18px] w-[18px]" />
        </div>
      </button>
      <form className="flex flex-1">
        <input
          type="text"
          placeholder="البحث عن المنتجات..."
          className="w-full pr-2 outline-none placeholder:text-[14px]"
        />
        <button
          onSubmit={(e) => e.preventDefault()}
          className="bg-main-color flex h-10 w-27 cursor-pointer items-start justify-center gap-x-1 rounded-full p-2 text-white"
        >
          <IoIosSearch className="h-6 w-6" />
          <span className="size-3.5 w-fit font-[500]">ابحث</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
