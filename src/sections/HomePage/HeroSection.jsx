import MainSlider from "src/components/HeroSection/MainSlider/Index";
import PromoCards from "src/components/HeroSection/PromoCards";
import CategorySlider from "src/components/HeroSection/CategorySlider/index";

export default function HeroSection() {
  return (
    <div className=" container flex gap-y-[24px] flex-col  mx-auto !py-(--section-padding) bg-mainSectionColor ">
      <div className="w-full flex justify-between" >
        <MainSlider />
        <PromoCards />
      </div>
      <CategorySlider />
    </div>
  );
}
