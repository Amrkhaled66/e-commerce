import Logo from "src/assets/logo.svg";

import { MdMenu } from "react-icons/md";

import MobileMenu from "./MobileMenu";
import SearchBox from "./SearchBox";
import NavLinks from "./NavLinks";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const toggleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="font-cairo border-stroke container mx-auto flex h-[80px] lg:h-[100px] items-center justify-between gap-x-14 border-b">
      <Link to="/" className="order-2 flex items-center gap-x-2 lg:order-none">
        <img src={Logo} alt="" />
        <h1 className="text-[20px] font-[700]">التسوق</h1>
      </Link>

      {/* search Box */}
      <SearchBox />

      {/* nav links */}
      <div className="order-3 lg:order-none">
        <NavLinks />
      </div>

      <div className="order-1 cursor-pointer lg:hidden">
        <MdMenu
          // onClick={toggleMenu}
          className="h-[32px] w-[32px]" />
        <MobileMenu isOpen={showMobileMenu} />
      </div>
    </div>
  );
}
