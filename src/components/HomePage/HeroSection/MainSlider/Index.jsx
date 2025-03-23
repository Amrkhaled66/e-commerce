import { useState } from "react";

import mainSliderImage1 from "src/assets/mainSliderImage1.webp";
import mainSliderImage2 from "src/assets/mainSliderImage2.webp";

import SliderContent from "./SliderContent";
import SliderComponents from "./SliderComponents";

const sliderImages = [`url(${mainSliderImage1})`, `url(${mainSliderImage2})`];

export default function MainSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative h-[262px] lg:h-[528px] flex-1 ">
      <div
        style={{ backgroundImage: sliderImages[currentIndex] }}
        className="flex h-full w-full items-center justify-center rounded-[40px] bg-cover bg-center bg-no-repeat py-[140px] transition-all duration-300 lg:justify-start"
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
