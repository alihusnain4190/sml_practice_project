import React, { useState, useContext, useReducer, useEffect } from "react";
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
  const incrementAmount = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };
  const decrementAmount = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };
  useEffect(() => {
    
    dispatch({ type: "TOTAL" });
  }, [state.cart]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        incrementAmount,
        decrementAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };
