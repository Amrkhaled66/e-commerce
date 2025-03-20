export default function SliderPoints({ currentIndex, onDotClick, length }) {
  return (
    <div className="absolute bottom-3 left-1/2 flex gap-2 -translate-x-1/2">
      {Array.from({ length }).map((_, index) => (
        <button
          key={index}
          onClick={() => onDotClick(index)}
          className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
            currentIndex === index
              ? "w-[116px] bg-white"
              : "w-[72px] bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}
