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
          <p className=" w-[90%] sm:w-[70%] text-[11px] leading-relaxed font-[700] lg:text-base">
            {question}
          </p>
        </div>
        <button
          onClick={() => onClick(id)}
          className={`bg-main-color h-[25px] w-[25px] cursor-pointer rounded-full text-white transition-all duration-300 hover:brightness-105 lg:h-[32px] lg:w-[32px]`}
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
          className={`text-subtitle  overflow-hidden rounded-2xl bg-white px-4 py-3 text-xs leading-8 font-[500] transition-all duration-300 ease-in-out lg:text-sm ${isOpen ? " my-3  md:my-5   max-h-[500px] opacity-100" : "max-h-0 opacity-0"} `}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
