import { FaArrowLeftLong } from "react-icons/fa6";

export default function SliderArrows({ className = "", dir, ...props }) {
  const positionClass = dir === "right" ? " rotate-180 right-4" : "left-4";
  return (
    <button
      {...props}
      className={`absolute top-1/2 transform z-50 -translate-y-1/2 bg-white !text-black p-3 rounded-full shadow-lg hover:border-main-color border-2 cursor-pointer duration-300 transition-all border-transparent ${positionClass} ${className}`}
    >
      <FaArrowLeftLong />
    </button>
  );
}