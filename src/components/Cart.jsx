import React, { useReducer } from "react";
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

  return (
    <>
      <ProductContext.Provider value={{ ...state }}>
        <CartComponent />
      </ProductContext.Provider>
    </>
  );
}
export default Cart;
