import { IoIosArrowDown } from "react-icons/io";

const FilterElement = ({ children, filterName, isOpen, onToggleMenu }) => {
  return (
    <div className="space-y-[12px]">
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

export default FilterElement;
