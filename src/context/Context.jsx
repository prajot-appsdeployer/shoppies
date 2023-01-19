import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export const GlobalContext = createContext();

export const Context = (props) => {
  const navigate = useNavigate();

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
