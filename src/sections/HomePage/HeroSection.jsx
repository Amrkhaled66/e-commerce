import MainSlider from "src/components/HomePage/HeroSection/MainSlider/Index";
import PromoCards from "src/components/HomePage/HeroSection/PromoCards";
import CategorySlider from "src/components/HomePage/HeroSection/CategorySlider/index";

export default function HeroSection() {
  return (
    <div className="bg-mainSectionColor">
      <div className="!pt-(--navbar-height-mobile) lg:!pt-(--navbar-height)">
        <div className="container mx-auto flex flex-col gap-y-4 !py-(--section-padding-mobile) sm:gap-y-5 md:gap-y-6 md:!py-(--section-padding) lg:gap-y-[24px]">
          <div className="flex w-full flex-col justify-between gap-x-6 gap-y-4 lg:flex-row">
            <MainSlider />
            <PromoCards />
          </div>
          <CategorySlider />
        </div>
      </div>
    </div>
  );
}
