import { GrCart } from "react-icons/gr";

export default function AddToCart() {
  return (
    <button className="font-cairo bg-main-color mx-auto flex w-full cursor-pointer items-center justify-center gap-x-2 rounded-2xl px-4 py-2 text-xs font-bold text-nowrap text-white transition-all duration-300 hover:brightness-110 md:text-sm lg:text-base">
      <span className="text-xl">
        <GrCart />
      </span>
      اٍضافة اٍلي العربة
    </button>
  );
}
