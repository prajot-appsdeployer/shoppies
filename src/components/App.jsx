import "../App.css";
import Login from "./auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./Navbar/Navbar";
import SignUp from "./auth/SignUp";
import Cart from "./Cart/Cart";
import NotFound from "./notfound/NotFound";
import Wishlist from "./Wishlist/Wishlist";
import OrderHistory from "./User/OrderHistory";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
