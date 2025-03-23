import { Outlet } from "react-router-dom";

import NavBar from "../components/layout/navbar/index";
import Footer from "../components/layout/Footer/index";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
