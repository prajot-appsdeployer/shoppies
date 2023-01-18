import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const alreadyItem = state.cartItems.filter(
        (item) => item.id === action.payload.id
      );

      if (alreadyItem.length > 0) {
        alert("Item already in cart.");
      } else {
        state.cartItems.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    increaseQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },

    decreaseQuantity: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    },

    addAllToCart: (state, action) => {
      action.payload.forEach((element) => {
        const checkArr = state.cartItems.filter(
          (item) => element.id === item.id
        );

        if (checkArr.length === 0) {
          state.cartItems.push(element);
        }
      });
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  addAllToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
