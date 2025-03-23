export default function Header() {
  return (
    <div className="relative">
      <h4 className="bg-main-color absolute top-0 right-1/2  translate-x-1/2 rounded-full px-6 py-2.5 text-xl font-bold text-white">
        منتجات
      </h4>
      <div
        className="font-cairo inner-curve relative flex h-[240px] w-full items-center justify-center rounded-[50px] pt-12 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(88deg, #8CBB26 3.56%, #8CBB26 57.6%, #C4FF45 117.45%)",
        }}
      >
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold lg:text-4xl">مجموعة لمساحتك</p>
          <p className="mx-auto w-[90%] text-sm leading-relaxed lg:text-xl">
            نقدم لك مجموعتنا المختارة بعناية من المنتجات! اخترنا لكم بعناية
            تشكيلة واسعة من المنتجات عالية الجودة التي ستلبي جميع احتياجاتكم
          </p>
        </div>
      </div>
    </div>
  );
}
