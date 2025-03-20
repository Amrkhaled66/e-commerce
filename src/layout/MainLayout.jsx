import { Outlet } from "react-router-dom";

import NavBar from "../components/navbar/index";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
