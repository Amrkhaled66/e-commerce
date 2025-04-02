import CategorySlider from "./CategorySlider";

export default function CategoryCarousel({ title, img, carouselData }) {
  return (
    <div className="font-cairo container mx-auto space-y-[16px] px-0 !py-[var(--section-padding-mobile)] lg:space-y-12 lg:!py-[var(--section-padding)]">
      <h3 className="mx-auto text-xl sm:text-2xl font-bold lg:w-full lg:text-[34px]">
        {title}
      </h3>
      <div className="mx-auto flex flex-col items-center gap-6 lg:w-full lg:flex-row">
        <img
          className="h-[476px] w-full rounded-2xl object-cover lg:w-1/4"
          src={img}
          alt={title}
        />
        <div className="w-screen lg:w-3/4">
          <CategorySlider carouselData={carouselData} slidesPerGroup={4} />
        </div>
      </div>
    </div>
  );
}
