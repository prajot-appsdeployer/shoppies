import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import wishlistReducer from "../features/WishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
