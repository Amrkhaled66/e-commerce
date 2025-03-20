import SliderPoints from "../../ui/SliderPoints"
import SliderArrows from "../../ui/SliderArrows"

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
      <SliderArrows onClick={prevImage} dir="left" />
      <SliderArrows onClick={nextImage} dir="right" />
      <SliderPoints
        length={length}
        currentIndex={currentIndex}
        onDotClick={goToImage}
      />
    </>
  );
}
