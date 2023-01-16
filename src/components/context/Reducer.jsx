// For cart
export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const tempstate = state.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case "INCREASE":
      const tempstate1 = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return tempstate1;

    case "DECREASE":
      const tempstate2 = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return tempstate2;

    case "REMOVE":
      const tempstate3 = state.filter((item) => item.id !== action.payload.id);
      return tempstate3;

    case "REMOVE_ALL":
      const tempstate4 = [];
      return tempstate4;

    case "ADD_ALL":
      const tempstate5 = action.payload;
      tempstate5.forEach((element) => {
        const checkArr = state.filter((item) => element.id === item.id);
        if (checkArr.length === 0) {
          state.push(element);
        }
      });
      return state;

    default:
      return state;
  }
};

// For wishlist
export const reducer1 = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      const tempstate = state.filter((item) => action.payload.id === item.id);
      if (tempstate.length > 0) {
        return state;
      } else {
        return [...state, action.payload];
      }

    case "REMOVE_FROM_WISHLIST":
      const tempstate1 = state.filter((item) => item.id !== action.payload.id);
      return tempstate1;

    case "REMOVE_ALL":
      const tempstate2 = [];
      return tempstate2;

    default:
      return state;
  }
};
