import CategorySlider from "./CategorySlider";

export default function CategoryCarousel({ title, img, carouselData }) {
  return (
    <div className="font-cairo container mx-auto space-y-12 px-0 !py-[var(--section-padding)]">
      <h3 className="mx-auto text-xl font-bold lg:w-full lg:text-[34px]">
        {title}
      </h3>
      <div className="mx-auto flex flex-col items-center gap-6 lg:w-full lg:flex-row">
        <img
          className="h-[476px] w-full object-cover rounded-2xl lg:w-1/4"
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
