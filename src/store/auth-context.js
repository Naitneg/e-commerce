import React, { useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "../../utils/firebase/firebase.utils";

export const AuthContext = React.createContext({
  currentUser: null,
  setCurrentUser: () => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      throw new Error(`unhandlet type ${action.type}`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const value = { currentUser: state.currentUser, setCurrentUser };

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
