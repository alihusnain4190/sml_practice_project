import axios from "axios";
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./recuder";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initState = {
    isLoading: false,
    jobs: [],
    full_time: false,
    job: "",
  };
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetchAllData();
  }, []);
  const searchJob = (job) => {
    dispatch({ type: "JOB", payload: job });
  };
  const fetchSearchJob = async (job) => {
    const header = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json?location=${state.job}`;

    try {
      let res = await axios.get(url, header);
      const jobs = res.data;

      dispatch({ type: "SEARCH_JOB", payload: jobs });
    } catch (err) {
      dispatch({ type: "LOADING" });
      console.log(err);
    }
  };
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
  const fetchFullJob = async () => {
    const header = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json?full_job=true`;

    try {
      console.log("asdasd");
      let res = await axios.get(url, header);
      const jobs = res.data;
      console.log(jobs);
      dispatch({ type: "FULL_JOB", payload: jobs });
    } catch (err) {
      dispatch({ type: "LOADING" });
      console.log(err);
    }
  };
  const fetchLondonjob = async (city) => {
    const header = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json?location=${city}`;
    try {
      const result = await axios.get(url, header);
      const jobs = result.data;
      dispatch({ type: "SHOW_CITY", payload: jobs });
    } catch (err) {
      dispatch({ type: "LOADING" });
      console.log(err);
    }
  };
  const fetchJobByLocation = async (location) => {
    const header = { headers: { "X-Requested-With": "XMLHttpRequest" } };
    let url = `https://stark-mesa-12909.herokuapp.com/https://jobs.github.com/positions.json?location=${location}`;
    try {
      const result = await axios.get(url, header);
      const jobs = result.data;
      dispatch({ type: "LOCATION", payload: jobs });
    } catch (err) {
      dispatch({ type: "LOADING" });
      console.log(err);
    }
  };
  console.log(state);
  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchFullJob,
        fetchLondonjob,
        fetchJobByLocation,
        searchJob,
        fetchSearchJob,
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
