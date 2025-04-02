import Accordion from "./Accordion";

export default function Content() {
  return (
    <div className="font-cairo flex flex-col items-center justify-center gap-y-[40px] lg:w-[70%]">
      <div className="w-full space-y-7 text-center">
        <h3 className="text-xl font-[700] lg:text-[34px]">الأسئلة الشائعة</h3>
        <p className="text-subtitle mx-auto w-[95%] sm:w-[60%] leading-8 md:w-[90%] text-sm lg:text-base  font-[500]">
          اعثر علي اجابات لأسئلتك الشائعة حول التسوق مع الشحن والدفع الي الأرجاع
          والخصومات,نوفر لك كل ما تحتاجة!
        </p>
      </div>
      <Accordion />
    </div>
  );
}
