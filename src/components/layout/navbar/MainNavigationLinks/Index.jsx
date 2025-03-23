import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Element from "./Element";
export default function Index() {
  return (
    <div className=" hidden lg:flex items-center border-b-[1px] border-stroke h-[60px] ">
      <div className="container  mx-auto flex gap-x-3">
        <HiOutlineSquares2X2 className="h-[28px] w-[28px]" />
        <div className="flex gap-x-7 ">
          <Element title="التسوق حسب" />
          <Element title="بيت" />
          <Element title="الوافدون الجدد" />
          <Element title="عروض فلاش" />
          <Element title="أفضل المبيعات" />
          <Element showArrow={false} title="العلامة التجارية " />
          <Element showArrow={false} title="أخبار" />
          <Element showArrow={false} title="أتصل بنا" />
        </div>
      </div>
    </div>
  );
}
