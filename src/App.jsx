import "./css/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar/Navbar";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Cart from "./pages/Cart";
import NotFound from "./pages/Others/NotFound";
import Wishlist from "./pages/Wishlist";
import OrderHistory from "./pages/OrderHistory";
import { PrivateRoute } from "./components/Privateroute";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        {/* Private routes to show only when the user is logged in */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orderhistory" element={<OrderHistory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
