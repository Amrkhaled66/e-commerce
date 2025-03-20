import promoCard1 from "../../../assets/promoCard1.webp";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function PromoCards() {
  return (
      <div className=" relative  w-fit h-fit">
          
      <div className="relative py-5 inverted-radius  group cursor-pointer overflow-hidden rounded-[40px] w-[440px] h-[252px]">
        <div
          style={{ backgroundImage: `url(${promoCard1})` }}
          className="absolute overflow-hidden  rotate-180 inset-0 bg-cover bg-center bg-no-repeat brightness-75  transition-all duration-300 group-hover:scale-110"
        ></div>

        {/* Content */}
        <div className="relative pr-9 w-[290px] space-y-6 font-cairo z-10 p-4 text-white">
          <p className="border border-white w-fit py-1 font-[700] px-5 rounded-full">
            منتج
          </p>
          <p className="font-[700] leading-relaxed text-xl">
            ملابس لا نهاية لها تسوق الأن
          </p>
          <p className="text-xs leading-relaxed  font-[600]">
            {" "}
            من الوجبات الخفيفة الي الأطعمة الشهية اكتشف كل شئ!
          </p>
        </div>
      </div>

      {/* CTA BTN */}
      <button className=" cursor-pointer hover:brightness-105 duration-300 transition-all absolute bottom-2 left-4 flex items-center justify-center text-3xl p-2.5 w-[42px] h-[42px] text-white rotate-45  rounded-full bg-main-color  ">
        <FaArrowLeftLong />
      </button>
    </div>
  );
}
