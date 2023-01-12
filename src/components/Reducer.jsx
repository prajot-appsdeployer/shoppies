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

    default:
      return state;
  }
};
