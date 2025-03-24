import React from "react";
import CategorySlider from "./CategorySlider";

export default function CategorySliderContainer({ carouselData }) {
  return (
    <div className="w-screen lg:w-3/4">
      <CategorySlider carouselData={carouselData} slidesPerGroup={4} />
    </div>
  );
} 