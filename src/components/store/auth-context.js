import React, { useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

export const AuthContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      setCurrentUser(user);
    });
    return unsubcribe;
  }, []);
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
