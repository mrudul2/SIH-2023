import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import { Products } from "../Pages/ProductPage/Products";
import { SingleProductPage } from "../Pages/SingleProdPage/SingleProductPage";
import Cart from "./Cart/Cart";
import Payment from "./PaymentPage/Payment";
import { LoginIndividualSlider } from "./LogInPages/QuickLogin";
import PrivateRoutes from "./PrivateRoutes";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
      <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />

      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<LoginIndividualSlider />} />
    </Routes>
  );
}

export default AllRoutes;
