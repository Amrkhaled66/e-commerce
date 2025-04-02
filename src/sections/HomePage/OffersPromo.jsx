import Right from "../../components/HomePage/OffersPromo/Right";
import Left from "../../components/HomePage/OffersPromo/Left";

export default function OffersPromo() {
  return (
    <div>
      <div className="container flex flex-col justify-between gap-y-5 !py-(--section-padding-mobile) lg:!py-(--section-padding) lg:flex-row">
        <Right />
        <Left />
      </div>
    </div>
  );
}
