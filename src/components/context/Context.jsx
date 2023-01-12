import { createContext, useReducer } from "react";
import { reducer } from "../Reducer";

export const CartContext = createContext();

export const Context = (props) => {
  const [state, dispatch] = useReducer(reducer, []);

  const GlobalState = { state, dispatch };

  return (
    <CartContext.Provider value={GlobalState}>
      {props.children}
    </CartContext.Provider>
  );
};
