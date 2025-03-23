export default function Stars({ length }) {
  return (
    <div className="flex gap-[2px]">
      {Array.from({ length }).map((_, index) => (
        <div className="star"></div>
      ))}
    </div>
  );
}
