import Header from "./Header/Index";
import MainNavigationLinks from "./MainNavigationLinks/Index";

import { useState } from "react";
export default function Index() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };
  return (
    <div className="fixed z-[10000] w-screen bg-white">
      <Header  onToggleMenu={toggleMenu} />
      <MainNavigationLinks onToggleMenu={toggleMenu} showMobileMenu={showMobileMenu} />
    </div>
  );
}
