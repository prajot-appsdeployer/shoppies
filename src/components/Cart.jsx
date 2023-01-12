import React, { useEffect, useReducer } from "react";
import CartComponent from "./CartComponent";
import { ProductContext } from "./App";
import { products } from "./products";
import { reducer } from "./Reducer";

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
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

  // to update the data for the cart items numbers
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

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
