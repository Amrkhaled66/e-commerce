import OffersPromo from "src/assets/OffersPromo.jpeg";

export default function Right() {
  return (
    <div className="lg:h-[475px]  lg:w-[475px] overflow-hidden rounded-[26px]">
      <img className="w-full  object-cover " src={OffersPromo} alt="OffersPromo" />
    </div>
  );
}
