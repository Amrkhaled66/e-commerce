import Accordion from "./Accordion";

export default function Content() {
  return (
    <div className="font-cairo gap-y-[40px] flex-col w-[70%] flex items-center justify-center  ">
      <div className="w-full space-y-7  text-center">
        <h3 className="font-[700] text-[34px] ">الأسئلة الشائعة</h3>
        <p className="  font-[500] leading-relaxed text-subtitle w-[90%] mx-auto ">
          اعثر علي اجابات لأسئلتك الشائعة حول التسوق مع الشحن والدفع الي الأرجاع
          والخصومات,نوفر لك كل ما تحتاجة!
        </p>
      </div>
      <Accordion />
    </div>
  );
}
