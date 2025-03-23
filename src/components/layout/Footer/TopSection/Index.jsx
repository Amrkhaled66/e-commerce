import { CiMail } from "react-icons/ci";

export default function TopSection() {
  return (
    <div className="border-stroke font-cairo flex flex-col items-start justify-between gap-y-5 border-b pb-8 lg:flex-row">
      <div className="space-y-5">
        <p className="text-xl font-[700]">تسوق بذكاء, وفر اكثر</p>
        <p className="text-subtitle">
          عروض لا تقبل المنافسة,اختيارات لا حصر لها تسوق الأن
        </p>
      </div>
      <div className="w-full space-y-5 lg:w-[50%]">
        <p className="text-xl font-[700]">النشرة الأخبارية</p>
        <p className="text-subtitle">
          اشترك لتلقي عروضنا واستمتع بخصم 10% علي طلبك الأول
        </p>
        <div className="border-stroke flex flex-1 rounded-full border-[1px] py-[1px] pr-3 pl-[2px]">
          <form className="relative flex flex-1">
            <div className="flex items-center gap-x-1">
              <CiMail className="h-[24px] w-[24px]" />
            </div>
            <input
              type="text"
              placeholder={`ادخل عنوان بريدك الألكتروني...`}
              className="w-full pr-2 outline-none placeholder:text-[14px]"
            />
            <button
              onSubmit={(e) => e.preventDefault()}
              className="bg-main-color flex h-10 w-27 cursor-pointer items-start justify-center gap-x-1 rounded-full p-2 text-white"
            >
              {/* <IoIosSearch className="w-6 h-6" /> */}
              <span className="size-3.5 w-fit font-[500]">اشترك</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
