import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LuUserRound } from "react-icons/lu";
import { GrCart } from "react-icons/gr";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <nav>
      <ul className="hidden gap-x-6 lg:flex">
        <NavLink
          icon={<AiOutlineHeart className="h-[18px] w-[18px]" />}
          title="المفضلة"
        />
        <NavLink
          icon={<LuUserRound className="h-[18px] w-[18px]" />}
          title="الحساب"
        />
        <NavLink
          icon={<GrCart className="h-[18px] w-[18px]" />}
          title="عربة التسوق (3)"
        />
      </ul>
      <div className="relative block lg:hidden">
        <span className="absolute -top-3 -right-2 w-[12px] h-[12px] flex items-center justify-center rounded-full bg-[#D40101] p-3 font-[700] text-white">
          0
        </span>
        <NavLink icon={<GrCart className="h-[32px] w-[32px]" />} />
      </div>
    </nav>
  );
};

export default NavLinks;
