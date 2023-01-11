export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.item.filter((product) => {
        return product.id != action.payload;
      }),
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      item: [],
    };
  }

  if (action.type === "INCREMENT") {
    const updatedCart = state.item.map((product) => {
      if (product.id === action.payload) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    return { ...state, item: updatedCart };
  }

  if (action.type === "DECREMENT") {
    const updatedCart = state.item
      .map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantity !== 0);
    return { ...state, item: updatedCart };
  }

  return state;
};
