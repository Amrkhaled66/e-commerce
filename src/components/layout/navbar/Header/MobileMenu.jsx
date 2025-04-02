// Icons
import { CiHome } from "react-icons/ci";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";

import { NavLink } from "react-router-dom";

const Item = ({ to, icon: Icon, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-cairo flex flex-col items-center gap-y-1 text-sm font-[600] transition-colors ${
          isActive ? "text-main-color" : "text-gray-500"
        }`
      }
    >
      <Icon className="h-6 w-6" />
      <span>{title}</span>
    </NavLink>
  );
};

export default function MobileMenu() {
  return (
    <div
      className={`fixed bottom-0 left-0 flex w-full justify-around border-t border-gray-200 bg-white p-4 shadow-md drop-shadow-lg transition-all duration-200`}
    >
      <Item to="/" icon={CiHome} title="الرئيسية" />
      <Item to="/search" icon={IoSearchOutline} title="البحث" />
      <Item to="/productList" icon={HiOutlineSquares2X2} title="الفئات" />
      <Item to="/profile" icon={LuUserRound} title="الحساب" />
    </div>
  );
}
