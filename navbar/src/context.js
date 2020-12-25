import React, { useState, useContext, useReducer } from "react";
import data from "./data";
import reducer from "./reducer";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const initialState = {
    isLoading: false,
    cart: data,
    total: 0,
    amount: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  return (
    <AppContext.Provider value={{ ...state, clearCart, removeItem }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
