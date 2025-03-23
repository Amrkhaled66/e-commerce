import FooterData from "./FooterData";
import { Link } from "react-router-dom";

import googlePlay from "src/assets/googlePlay.png";
import appStore from "src/assets/appStore.png";

import { FaRegCopyright } from "react-icons/fa6";

import { useState } from "react";

import SocialIcons from "src/components/ui/SocialIcons";
export default function BottomSection() {
  const currYear = new Date().getFullYear();

  const [activeItemName, setActiveItemName] = useState(null);

  return (
    <div>
      <div className="font-cairo flex flex-col justify-between pt-[20px] pb-[45px] lg:flex-row">
        {FooterData.map((element) => {
          return (
            <div className="flex flex-col gap-y-6">
              <div className="flex justify-between">
                <h4 className="text-base font-[700] lg:text-xl">
                  {element.title}
                </h4>
                <button
                  onClick={() =>
                    setActiveItemName((prev) =>
                      prev === element.title ? null : element.title,
                    )
                  }
                  className="block cursor-pointer text-2xl lg:hidden"
                >
                  +
                </button>
              </div>
              <nav>
                <ul
                  className={` ${element.title === activeItemName ? "max-h-[200px]" : "max-h-[0px] lg:max-h-[200px]"} flex flex-col gap-y-5 overflow-hidden transition-all duration-300 lg:flex`}
                >
                  {element.elements.map((item) => (
                    <Link>
                      <li
                        key={item.name}
                        className="hover:text-main-color text-subtitle text-sm font-[500] hover:underline"
                      >
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
            </div>
          );
        })}
      </div>
      <div className="space-y-6">
        <div className="mx-auto flex w-[80%] items-center justify-center lg:justify-between">
          <div className="hidden cursor-pointer items-center gap-x-4 overflow-hidden lg:flex">
            <img
              className="h-[60px] w-[160px] rounded-2xl"
              src={googlePlay}
              alt=""
            />
            <img
              className="h-[50px] w-[160px] rounded-2xl"
              src={appStore}
              alt=""
            />
          </div>
          <div className="space-y-5">
            <p className="font-cairo text-center text-xl font-[700]">
              تواصل معنا
            </p>
            <SocialIcons />
          </div>
        </div>
        <p className="font-cairo flex items-center justify-center gap-x-1 tracking-wide">
          <FaRegCopyright /> سوقنا جميع الحقوق محفوظة {currYear}
        </p>
      </div>
    </div>
  );
}
