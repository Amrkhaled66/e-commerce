import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import { HomePage } from "./pages";

export default function Paths() {
  return (
    <Routes>
      <Route path="/"  element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
