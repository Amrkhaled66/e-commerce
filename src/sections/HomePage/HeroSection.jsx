import MainSlider from "src/components/HomePage/HeroSection/MainSlider/Index";
import PromoCards from "src/components/HomePage/HeroSection/PromoCards";
import CategorySlider from "src/components/HomePage/HeroSection/CategorySlider/index";

export default function HeroSection() {
  return (
    <div className="bg-mainSectionColor">
      <div className="container mx-auto flex flex-col gap-y-[24px] !pt-(--navbar-height-mobile) lg:!pt-(--navbar-height)">
        <div className="flex w-full flex-col justify-between gap-x-6 gap-y-12 !py-(--section-padding) lg:flex-row">
          <MainSlider />
          <PromoCards />
        </div>
        <CategorySlider />
      </div>
    </div>
  );
}
