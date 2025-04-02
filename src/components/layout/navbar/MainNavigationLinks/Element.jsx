export default function Element({ showArrow = true, title, Arrow, className }) {
  return (
    <p
      className={`font-cairo flex cursor-pointer items-center justify-between gap-x-2 ${className} `}
    >
      {title}
      {showArrow && Arrow}
    </p>
  );
}
