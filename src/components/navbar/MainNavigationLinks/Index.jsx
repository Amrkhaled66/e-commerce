import navIcon from "src/assets/navIcon.svg";
import Element from "./Element";
export default function Index() {
  return (
    <div className=" flex items-center border-y-[1px] border-stroke h-[60px] ">
      <div className="container  mx-auto flex gap-x-3">
        <img className="w-fit h-fit my-auto" src={navIcon} alt="" />
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
