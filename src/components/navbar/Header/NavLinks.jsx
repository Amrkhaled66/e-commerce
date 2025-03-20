import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import EG from "src/assets/EG.png";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <nav>
      <ul className="flex gap-x-6">
        <li className="cursor-pointer flex gap-x-2 items-center">
          <span className="items-center gap-x-1 flex">
            <img src={EG} className="w-fit h-fit" alt="Arabic" />
            العربية
          </span>
          <span>
            <IoIosArrowDown />
          </span>
        </li>
        <NavLink
          icon={<AiOutlineHeart className="w-[18px] h-[18px]" />}
          title="المفضلة"
        />
        <NavLink
          icon={<LuUserRound className="w-[18px] h-[18px]" />}
          title="الحساب"
        />
        <NavLink
          icon={<GrCart className="w-[18px] h-[18px]" />}
          title="عربة التسوق (3)"
        />
      </ul>
    </nav>
  );
};

export default NavLinks;
