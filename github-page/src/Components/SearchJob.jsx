import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
import { FaSistrix } from "react-icons/fa";
const SearchJob = () => {
  const { isLoading, searchJob, job, fetchSearchJob } = useGlobalContext();

  if (isLoading === true) return <Loading />;
  return (
    <div className="nav">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchSearchJob();
        }}
      >
        <div className="nav__input_wrapper">
          <i>
            <FaSistrix className="nav__search"></FaSistrix>
          </i>
          <input
            className="nav__input"
            type="text"
            name="search"
            id="search"
            placeholder="Title, companies, expertise or benifits"
            value={job}
            onChange={(e) => {
              searchJob(e.target.value);
            }}
          />

          <button className="nav__btn">Search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchJob;
