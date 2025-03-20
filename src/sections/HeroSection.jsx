import MainSlider from "../components/HeroSection/MainSlider/Index";
import PromoCards from "../components/HeroSection/PromoCards";
import CategorySlider from "../components/HeroSection/CategorySlider/index";

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
