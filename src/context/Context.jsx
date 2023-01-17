import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../firebase";
import { reducer } from "./Reducer";
import { reducer1 } from "./Reducer";

export const GlobalContext = createContext();

export const Context = (props) => {
  // User Login state
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(null);
      }
    });
  }, []);

  // FOR CART
  const [state, dispatch] = useReducer(reducer, []);
  const addItem = (product) =>
    dispatch({
      type: "ADD",
      payload: product,
    });

  const removeItem = (product) =>
    dispatch({
      type: "REMOVE",
      payload: product,
    });

  const clearCart = () => {
    dispatch({
      type: "REMOVE_ALL",
    });
  };

  const increaseQuantity = (product) => {
    dispatch({ type: "INCREASE", payload: product });
  };

  const decreaseQuantity = (product) => {
    dispatch({ type: "DECREASE", payload: product });
  };

  const addAllToCart = (wishlistItems) => {
    dispatch({
      type: "ADD_ALL",
      payload: wishlistItems,
    });
  };

  // FOR WISHLIST
  const [state1, dispatchWishlist] = useReducer(reducer1, []);
  const wishlistRemoveItem = (product) => {
    dispatchWishlist({
      type: "REMOVE_FROM_WISHLIST",
      payload: product,
    });
  };

  const wishlistAddItem = (product) => {
    dispatchWishlist({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };

  const clearWishlist = () => {
    dispatchWishlist({
      type: "REMOVE_ALL",
    });
  };

  const CartState = { state, state1 };
  return (
    <GlobalContext.Provider
      value={{
        userState,
        CartState,
        addItem,
        removeItem,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
        wishlistRemoveItem,
        wishlistAddItem,
        clearWishlist,
        addAllToCart,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
