import Header from "./Header/Index";
import MainNavigationLinks from "./MainNavigationLinks/Index";

export default function Index() {
  return (
    <div className="fixed z-[10000] w-screen bg-white">
      <Header />
      <MainNavigationLinks />
    </div>
  );
}
