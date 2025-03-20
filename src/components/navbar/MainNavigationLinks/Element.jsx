import { IoIosArrowDown } from "react-icons/io";

export default function Element({ showArrow = true, title }) {
  return (
    <p className="font-cairo  cursor-pointer flex gap-x-2 items-center font-[700] ">
      {title}
      {showArrow && <IoIosArrowDown />}
    </p>
  );
}
