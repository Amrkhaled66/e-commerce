export default function Header() {
  return (
    <div className="   relative ">
      <h4 className=" absolute rounded-full top-0 text-xl font-[700] text-white px-6 py-2.5  right-1/2 translate-x-1/2 bg-main-color z-50 ">
        منتجات
      </h4>
      <div
        style={{
          backgroundImage:
            "linear-gradient(88deg, #8CBB26 3.56%, #8CBB26 57.6%, #C4FF45 117.45%)",
        }}
        className="  rounded-[50px]   inner-curve w-full  flex items-end justify-center relative    text-white font-cairo text-center pb-12"
      >
        <div className="  flex flex-col gap-y-7 " >
          <p className=" text-4xl font-[700] " >مجموعة لمساحتك</p>
          <p  className="text-xl leading-wider leading-relaxed mx-auto w-[90%] ">
            نقدم لك مجموعتنا المختارة بعناية من المنتجات! اخترنا لكم بعناية
            تشكيلة واسعة من المنتجات عالية الجودة التي ستلبي جميع احتياجاتكم
          </p>
        </div>
      </div>
    </div>
  );
}
