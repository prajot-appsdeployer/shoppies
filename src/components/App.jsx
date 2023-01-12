import "../App.css";
import Login from "./auth/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NavBar from "./Navbar/Navbar";
import SignUp from "./auth/SignUp";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Cart from "./Cart/Cart";
import NotFound from "./notfound/NotFound";

function App() {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(user);
      } else {
        setLoggedIn(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
