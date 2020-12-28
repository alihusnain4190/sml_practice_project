import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
const SearchJob = () => {
  const { isLoading, searchJob, job, fetchSearchJob } = useGlobalContext();

  if (isLoading === true) return <Loading />;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchSearchJob();
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          value={job}
          onChange={(e) => {
            searchJob(e.target.value);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchJob;
