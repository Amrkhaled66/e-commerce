import HeroSection from "../sections/HomePage/HeroSection";
import SellingCarousel from "../sections/HomePage/SellingCarousel";
import OffersSlider from "../sections/HomePage/OffersSlider";
import OffersPromo from "../sections/HomePage/OffersPromo";
import FoodCarousel from "../sections/HomePage/FoodCarousel";
import FAQ from "../sections/HomePage/FAQSection";
import FilteringSection from "../sections/HomePage/FilteringSection";
import ClothesSection from "../sections/HomePage/ClothesSection";
import TopCategories from "../sections/HomePage/TopCategories";
import GymCarousel from "../sections/HomePage/GymSection";
import PannerSlider from "../sections/HomePage/PannerSlider";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SellingCarousel />
      <OffersSlider />
      <OffersPromo />
      <OffersSlider />
      <FoodCarousel />
      <FAQ />
      <FilteringSection />
      <OffersSlider />
      <ClothesSection />
      <TopCategories />
      <GymCarousel />
      <PannerSlider />
    </>
  );
}
