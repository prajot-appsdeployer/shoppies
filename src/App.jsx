import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/Navbar/Navbar";
import Login from "./Pages/auth/Login";
import SignUp from "./Pages/auth/SignUp";
import Cart from "./Pages/Cart";
import NotFound from "./Pages/Others/NotFound";
import Wishlist from "./Pages/Wishlist";
import OrderHistory from "./Pages/OrderHistory";
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
        <Route path="/user" element={<PrivateRoute />}>
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="orderhistory" element={<OrderHistory />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
