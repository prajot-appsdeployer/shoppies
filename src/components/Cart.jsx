import React from "react";
import CartComponent from "./CartComponent";
import { ProductContext } from "./App";
import { products } from "./products";

function Cart() {
  return (
    <>
      <ProductContext.Provider value={products}>
        <CartComponent />
      </ProductContext.Provider>
    </>
  );
}
export default Cart;
