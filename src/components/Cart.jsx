import React, { useEffect, useReducer } from "react";
import CartComponent from "./CartComponent";
import { ProductContext } from "./App";
import { products } from "./products";
import { reducer } from "./Reducer";

const initialState = {
  item: products,
  totalAmount: 0,
  totalItems: 0,
};

function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // to remove the item from the item card
  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  // Clear Cart
  const clearCart = () => {
    return dispatch({
      type: "CLEAR_CART",
    });
  };

  // increment product quantity
  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  // decrease product quantity
  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  useEffect(() => {});

  return (
    <>
      <ProductContext.Provider
        value={{ ...state, removeItem, clearCart, increment, decrement }}
      >
        <CartComponent />
      </ProductContext.Provider>
    </>
  );
}
export default Cart;
