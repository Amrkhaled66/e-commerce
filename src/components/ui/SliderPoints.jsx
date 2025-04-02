export default function SliderPoints({
  currentIndex,
  onDotClick,
  length,
  className,
  activeBg = "white",
  hiddenSmall = "true",
}) {
  return (
    <div
      className={`absolute bottom-1 sm:bottom-4 left-1/2 flex -translate-x-1/2 gap-2 lg:bottom-8 ${className}`}
    >
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${
            currentIndex === index
              ? `w-[116px] bg-${activeBg}`
              : "w-[72px] bg-gray-400"
          } ${hiddenSmall ? "hidden" : "lg:block"} `}
        />
      ))}
    </div>
  );
}
