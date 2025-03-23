import Header from "src/components/HomePage/FilteringSection/Header";
import Filters from "../../components/HomePage/FilteringSection/FilteringProducts/Filters";

export default function FilteringSection() {
  return (
    <div className=" ">
      <div className=" !w-screen lg:w-full space-y-15 container !py-(--section-padding) mx-auto">
        <Header />
        <Filters />
      </div>
    </div>
  );
}
