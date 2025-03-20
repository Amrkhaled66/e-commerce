import { useState } from "react";

import mainSliderImage1 from "src/assets/mainSliderImage1.webp";
import mainSliderImage2 from "src/assets/mainSliderImage2.webp";

import SliderContent from "./SliderContent";
import SliderComponents from "./SliderComponents";

const sliderImages = [`url(${mainSliderImage1})`, `url(${mainSliderImage2})`];

export default function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-[920px]  h-[528px]">
      <div
        style={{ backgroundImage: sliderImages[currentIndex] }}
        className="w-full h-full rounded-[40px] flex items-center bg-center bg-cover bg-no-repeat   transition-all duration-300"
      >
        <SliderContent />
        <SliderComponents
          length={sliderImages.length}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
      </div>
    </div>
  );
}
