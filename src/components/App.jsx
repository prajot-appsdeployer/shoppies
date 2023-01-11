import "../App.css";
import Login from "./auth/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import SignUp from "./auth/SignUp";
import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import Cart from "./Cart";
import { products } from "./products";

export const ProductContext = createContext();

function App() {
  const navigate = useNavigate();
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
      {/* Login Form */}
      <Routes>
        {loggedIn ? (
          <>
            <Route
              path="/"
              element={
                <>
                  <ProductContext.Provider value={products}>
                    <Home loggedIn={loggedIn} />
                  </ProductContext.Provider>
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </>
        ) : (
          navigate("/login")
        )}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
