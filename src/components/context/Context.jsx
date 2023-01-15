import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer, useState } from "react";
import { auth } from "../../firebase";
import { reducer } from "./Reducer";
import { reducer1 } from "./Reducer";

export const CartContext = createContext();

export const Context = (props) => {
  // User Login state
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(null);
      }
    });
  }, []);

  const [state, dispatch] = useReducer(reducer, []);
  const [state1, dispatch1] = useReducer(reducer1, []);

  const GlobalState = { state, dispatch, state1, dispatch1 };
  return (
    <CartContext.Provider value={{ GlobalState, userState }}>
      {props.children}
    </CartContext.Provider>
  );
};
