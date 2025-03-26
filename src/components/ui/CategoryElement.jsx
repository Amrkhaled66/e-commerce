export default function CategoryElement({ img, title }) {
  return (
    <div className="mx-auto flex w-[104px] cursor-pointer flex-col items-center gap-3 sm:w-[125px]">
      <img
        className="border-stroke h-[104px] w-[104px] rounded-2xl border-2 object-cover sm:h-[125px] sm:w-[125px]"
        src={img}
        alt={title}
      />
      <p className="font-cairo text-center text-sm font-bold sm:text-base">
        {title}
      </p>
    </div>
  );
}
