import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Element from "./Element";
import Overlay from "../../../ui/OverLay";

// Constants moved to separate section
const MENU_ITEMS = [
  { title: "التسوق حسب", showArrow: true },
  { title: "الرئيسية", showArrow: true },
  { title: "الوافدون الجدد", showArrow: true },
  { title: "عروض فلاش", showArrow: true },
  { title: "أفضل المبيعات", showArrow: true },
  { title: "التصفية", showArrow: false, link: "/filterproducts" },
  { title: "العلامة التجارية", showArrow: false },
  { title: "أخبار", showArrow: false },
  { title: "أتصل بنا", showArrow: false },
];

const MOBILE_MENU_SECTIONS = [
  {
    title: "القائمة",
    items: [...MENU_ITEMS],
  },
  {
    title: "حسابي",
    items: [
      { title: "حسابي", showArrow: false },
      { title: "تسجيل الدخول", showArrow: false },
      { title: "انشاء حساب", showArrow: false },
    ],
  },
];

// Reusable arrow component to avoid duplication
const MobileArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M15 15.714V8.287C15 8.04167 14.9187 7.84567 14.756 7.699C14.594 7.55234 14.4047 7.479 14.188 7.479C14.12 7.479 14.049 7.48834 13.975 7.507C13.9017 7.525 13.8313 7.55267 13.764 7.59L7.921 11.323C7.797 11.4097 7.70367 11.509 7.641 11.621C7.579 11.7323 7.548 11.8587 7.548 12C7.548 12.1413 7.579 12.2677 7.641 12.379C7.703 12.4903 7.79633 12.5897 7.921 12.677L13.764 16.41C13.8313 16.4467 13.9023 16.4743 13.977 16.493C14.0517 16.5117 14.1227 16.521 14.19 16.521C14.4073 16.521 14.5967 16.4477 14.758 16.301C14.9193 16.1543 15 15.9587 15 15.714Z"
      fill="#333333"
    />
  </svg>
);

const DesktopMenu = () => (
  <div className="border-stroke font-cairo container mx-auto hidden h-[60px] items-center gap-x-3 border-b-[1px] lg:flex">
    <HiOutlineSquares2X2 className="h-[28px] w-[28px]" />
    <div className="flex gap-x-7">
      {MENU_ITEMS.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </div>
  </div>
);

const MenuItem = ({ item }) => {
  const element = (
    <Element
      title={item.title}
      Arrow={<IoIosArrowDown />}
      showArrow={item.showArrow}
      className="font-bold"
    />
  );
  return item.link ? <Link to={item.link}>{element}</Link> : element;
};

const MobileMenuHeader = ({ activeMenu, setActiveMenu, onToggleMenu }) => (
  <div className="flex items-center justify-between">
    <div className="space-x-[16px]">
      {MOBILE_MENU_SECTIONS.map((menu, index) => (
        <button
          key={index}
          className={`px-2 py-1 text-sm ${menu.title === activeMenu ? "border-b-main-color border-b font-bold" : " "}`}
          onClick={() => setActiveMenu(menu.title)}
        >
          {menu.title}
        </button>
      ))}
    </div>

    <button onClick={onToggleMenu}>
      <Icon
        icon="zondicons:close-outline"
        width="18"
        height="18"
        className="text-black"
      />
    </button>
  </div>
);

const MobileMenuItem = ({ item, index, itemsLength }) => {
  const borderClass =
    index !== itemsLength - 1 ? "border-b-stroke border-b-[.5px]" : "";

  const element = (
    <Element
      title={item.title}
      showArrow={item.showArrow}
      Arrow={<MobileArrowIcon />}
      className={`pb-2 text-sm font-[600] ${borderClass}`}
    />
  );

  return item.link ? <Link to={item.link}>{element}</Link> : element;
};

const MobileMenu = ({ activeMenu }) => {
  const activeItems =
    MOBILE_MENU_SECTIONS.find((menu) => menu.title === activeMenu)?.items || [];

  return (
    <div className="gap-y- flex flex-col gap-y-[12px]">
      {activeItems.map((item, index) => (
        <MobileMenuItem
          key={index}
          item={item}
          index={index}
          itemsLength={activeItems.length}
        />
      ))}
    </div>
  );
};

export default function NavigationMenu({ showMobileMenu, onToggleMenu }) {
  const [activeMenu, setActiveMenu] = useState("القائمة");

  return (
    <div>
      <DesktopMenu />

      {showMobileMenu && (
        <div className="md:hidden" >
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 z-[100000] flex h-screen w-[288px] flex-col gap-y-5 bg-white p-4 ">
            <MobileMenuHeader
              onToggleMenu={onToggleMenu}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
            <MobileMenu activeMenu={activeMenu} />
          </div>

          <Overlay />
        </div>
      )}
    </div>
  );
}
