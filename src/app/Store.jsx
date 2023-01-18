import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import wishlistReducer from "../features/Wishlist";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
