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
    <div  >
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center gap-x-2">
          <div className="bg-mainColor  w-[44px] h-[44px] flex items-center justify-center text-white bg-main-color  rounded-[50px] ">
            {icon}
          </div>
          <p className=" font-[700] ">{question}</p>
        </div>
        <button
          onClick={() => onClick(id)}
          className={`  text-white bg-main-color w-[32px] rounded-full cursor-pointer hover:brightness-105 duration-300  transition-all h-[32px] `}
        >
          <IoChevronDown
            className={` ${
              isOpen ? "-rotate-180" : "rotate-0"
            } transition-all duration-300 m-auto`}
          />
        </button>
      </div>
      <div>
        <p
          className={`bg-white py-3 px-4 text-subtitle rounded-2xl text-sm leading-8 font-[500] transition-all duration-300 ease-in-out overflow-hidden
      ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
    `}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
