import { IoChevronDown } from "react-icons/io5";

export default function AccordionItem({
  question,
  answer,
  icon,
  activeItemId,
  onClick,
  id,
}) {
  const isOpen = activeItemId === id;
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <div className="flex w-full items-center gap-x-2">
          <div className="bg-mainColor bg-main-color flex h-[44px] w-[44px] items-center justify-center rounded-[50px] text-white">
            {icon}
          </div>
          <p className="text-xs w-[70%] font-[700] lg:text-base leading-relaxed ">{question}</p>
        </div>
        <button
          onClick={() => onClick(id)}
          className={`bg-main-color lg:h-[32px] h-[25px] w-[25px] lg:w-[32px] cursor-pointer rounded-full text-white transition-all duration-300 hover:brightness-105`}
        >
          <IoChevronDown
            className={` ${
              isOpen ? "-rotate-180" : "rotate-0"
            } m-auto transition-all duration-300`}
          />
        </button>
      </div>
      <div>
        <p
          className={`text-subtitle overflow-hidden rounded-2xl bg-white px-4 py-3 text-xs leading-8 font-[500] transition-all duration-300 ease-in-out lg:text-sm ${isOpen ? "mt-5slid max-h-[500px] opacity-100" : "max-h-0 opacity-0"} `}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
