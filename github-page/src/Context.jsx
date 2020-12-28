import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./recuder";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initState = { isLoading: false, jobs: [] };
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    const header = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json`;

    try {
      let res = await axios.get(url, header);
      const jobs = res.data;

      dispatch({ type: "DISPLAY_ALL", payload: jobs });
    } catch (err) {
      dispatch({ type: "LOADING" });
      console.log(err);
    }
  };
  const fetchFullJob = () => {
    console.log("asd");
  };
  return (
    <AppContext.Provider value={{ ...state, fetchFullJob }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
