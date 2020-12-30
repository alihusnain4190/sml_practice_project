import React from "react";
import Loading from "../Components/Loading";
import Jobs from "../Components/Jobs";
import Options from "../Components/Options";
import { useGlobalContext } from "../Context";
import SearchJob from "../Components/SearchJob";
const Landing = () => {
  const { isLoading, jobs } = useGlobalContext();

  if (isLoading === true) return <Loading />;
  return (
    <main className="landing">
      <div>
        <SearchJob />
      </div>
      <div className="opt-job__wrapper">
        <div className="landing__opt">
          <Options />
        </div>
        <div className="landing__jobs">
          {jobs.map((j) => {
            return <Jobs data={j}></Jobs>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Landing;
