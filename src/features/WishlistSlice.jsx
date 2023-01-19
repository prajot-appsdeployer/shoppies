import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    wishlistAddItem: (state, action) => {
      const alreadyItem = state.wishlistItems.filter(
        (item) => action.payload.id === item.id
      );

      if (alreadyItem.length > 0) {
        alert("Item already in wishlist.");
      } else {
        state.wishlistItems.push(action.payload);
      }
    },

    wishlistRemoveItem: (state, action) => {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearWishlist: (state) => {
      state.wishlistItems = [];
    },

    firestoreToWishlist: (state, action) => {
      action.payload.forEach((element) => {
        const checkArr = state.wishlistItems.filter(
          (item) => element.id === item.id
        );

        if (checkArr.length === 0) {
          state.wishlistItems = state.wishlistItems.concat(action.payload);
        }
      });
    },
  },
});

export const {
  wishlistAddItem,
  wishlistRemoveItem,
  clearWishlist,
  firestoreToWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
