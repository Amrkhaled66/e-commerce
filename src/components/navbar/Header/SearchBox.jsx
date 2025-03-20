import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="flex flex-1 border-[1px] pr-3 pl-[2px] py-[1px] border-stroke rounded-full">
      <button className="flex border-l-2 pl-2 h-fit my-auto border-black gap-x-2 items-center">
        <div className="flex gap-x-1 items-center">
          <span>
            <HiOutlineMapPin className="w-[22px] h-[22px]" />
          </span>
          <span className="font-[500] text-[14px]">جميع الفئات</span>
        </div>
        <div>
          <IoIosArrowDown className="w-[18px] h-[18px]" />
        </div>
      </button>
      <form className="flex-1 flex">
        <input
          type="text"
          placeholder="البحث عن المنتجات..."
          className="placeholder:text-[14px] w-full pr-2 outline-none"
        />
        <button
          onSubmit={(e) => e.preventDefault()}
          className="bg-main-color cursor-pointer justify-center gap-x-1 text-white flex items-start p-2 rounded-full w-27 h-10"
        >
          <IoIosSearch className="w-6 h-6" />
          <span className="font-[500] w-fit size-3.5">ابحث</span>
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
