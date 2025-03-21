import Right from "../../components/OffersPromo/Right";
import Left from "../../components/OffersPromo/Left";

export default function OffersPromo() {
  return (
    <div>
      <div className=" !py-(--section-padding)   container mx-auto flex justify-between ">
        <Right />
        <Left />
      </div>
    </div>
  );
}
