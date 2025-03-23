import promoCard1 from "src/assets/promoCard1.webp";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function PromoCards() {
  return (
    <div className="relative h-fit w-full">
      <div className="inverted-radius group relative h-[252px] w-full lg:w-[440px] cursor-pointer overflow-hidden rounded-[40px] py-5">
        <div
          style={{ backgroundImage: `url(${promoCard1})` }}
          className="absolute inset-0 rotate-180 overflow-hidden bg-cover bg-center bg-no-repeat brightness-75 transition-all duration-300 group-hover:scale-110"
        ></div>

        {/* Content */}
        <div className="font-cairo relative z-10 w-[290px] space-y-6 p-4 pr-9 text-white">
          <p className="w-fit rounded-full border border-white px-5 py-1 font-[700]">
            منتج
          </p>
          <p className="text-xl leading-relaxed font-[700]">
            ملابس لا نهاية لها تسوق الأن
          </p>
          <p className="text-xs leading-relaxed font-[600]">
            {" "}
            من الوجبات الخفيفة الي الأطعمة الشهية اكتشف كل شئ!
          </p>
        </div>
      </div>

      {/* CTA BTN */}
      <button className="bg-main-color absolute bottom-2 left-4 flex h-[42px] w-[42px] rotate-45 cursor-pointer items-center justify-center rounded-full p-2.5 text-3xl text-white transition-all duration-300 hover:brightness-105">
        <FaArrowLeftLong />
      </button>
    </div>
  );
}
