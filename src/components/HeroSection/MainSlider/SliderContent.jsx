import { FaArrowLeftLong } from "react-icons/fa6";



const SliderContent = () => {
  return (
    <div className="text-white flex flex-col gap-y-4 pr-20 font-cairo">
      <h3 className=" pb-1 font-[700] text-[34px]">سوبر ماركت الكترونيات</h3>
      <p>مهرجان تخفضات مثير تسوق كما يحلو لك!</p>
      <button className="px-5 cursor-pointer hover:brightness-110 duration-300 transition-all w-fit h-fit items-center rounded-[16px] gap-x-2 py-3 flex bg-main-color">
        <span className="font-[700]">اشتري الأن</span>
        <span>
          <FaArrowLeftLong />
        </span>
      </button>
    </div>
  );
};

export default SliderContent;
