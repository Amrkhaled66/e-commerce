import Logo from "src/assets/logo.svg";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";

export default function Index() {
  return (
    <div className="h-[100px] container mx-auto font-cairo gap-x-14 justify-between flex items-center ">
      <div className="flex gap-x-2 items-center">
        <img src={Logo} alt="" />
        <h1 className="font-[700] text-[20px]">التسوق</h1>
      </div>

      {/* search Box */}
      <SearchBox />

      {/* nav links */}
      <div>
        <NavLinks />
      </div>
    </div>
  );
}
