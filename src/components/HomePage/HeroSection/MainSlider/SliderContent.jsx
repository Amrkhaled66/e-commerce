import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SliderContent = () => {
  return (
    <div className="font-cairo flex flex-col items-center justify-center lg:items-start gap-y-4 text-center text-white lg:pr-20">
      <h3 className="pb-1 text-[20px] font-[700] lg:text-[34px]">
        سوبر ماركت الكترونيات
      </h3>
      <p className="text-sm  leading-relaxed sm:text-base">
        مهرجان تخفضات مثير تسوق كما  يحلو لك!
      </p>
      <Link to="filterproducts" className="bg-main-color flex h-fit w-fit cursor-pointer items-center gap-x-2 rounded-[16px] px-5 py-3 transition-all duration-300 hover:brightness-110">
        <span className="font-[700]">اشتري الأن</span>
        <span>
          <FaArrowLeftLong />
        </span>
      </Link>
    </div>
  );
};

export default SliderContent;
