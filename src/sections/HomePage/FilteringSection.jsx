import Header from "src/components/HomePage/FilteringSection/Header";
import Filters from "src/components/HomePage/FilteringSection/FilteringProducts/Filters";

export default function FilteringSection() {
  return (
    <div className=" ">
      <div className="container mx-auto !w-screen space-y-15 !py-(--section-padding-mobile) lg:w-full lg:!py-(--section-padding)">
        <Header />
        <Filters />
      </div>
    </div>
  );
}
