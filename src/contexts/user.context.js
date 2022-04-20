import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedHandler, getUsertDocument } from "../utils/util";

export const UserContext = createContext({
  curentUser: null,
  setCurenUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [curentUser, setCurenUser] = useState(null);
  const value = { curentUser, setCurenUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedHandler((user) => {
      console.log(user);
      if (user) {
        getUsertDocument(user);
      }
      setCurenUser(user);
    }); JDHA dLLT FORS
    return unsubcribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
console.log("hello");
