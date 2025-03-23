import BottomSection from "src/components/layout/Footer/BottomSection/index";
import TopSection from "src/components/layout/Footer/TopSection/index";

export default function Footer() {
  return (
    <div>
      <div className=" container space-y-11 mx-auto !py-(--section-padding) ">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
}
