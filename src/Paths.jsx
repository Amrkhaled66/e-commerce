import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import {
  HomePage,
  ProductPage,
  CartPage,
  ProductListPage,
  FilterProductsPage,
} from "./pages";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="productlist" element={<ProductListPage />} />
        <Route path="filterproducts" element={<FilterProductsPage />} />
      </Route>
    </Routes>
  );
}
