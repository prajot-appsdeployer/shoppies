import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const GlobalContext = createContext();

export const Context = (props) => {
  // User Login state
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserState(user);
        window.history.back();
      } else {
        setUserState(null);
      }
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ userState }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
