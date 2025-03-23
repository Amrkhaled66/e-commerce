import SliderPoints from "src/components/ui/SliderPoints"
import SliderArrows from "src/components/ui/SliderArrows"

export default function SliderComponents({
  setCurrentIndex,
  currentIndex,
  length,
}) {
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + length) % length
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <SliderArrows className="hidden lg:block" onClick={prevImage} dir="left" />
      <SliderArrows className="hidden lg:block" onClick={nextImage} dir="right" />
      <SliderPoints
        hiddenSmall={false}
        length={length}
        currentIndex={currentIndex}
        onDotClick={goToImage}
      />
    </>
  );
}
