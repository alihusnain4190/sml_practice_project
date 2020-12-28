import React from "react";
import Loading from "../Components/Loading";
import Jobs from "../Components/Jobs";
import Options from "../Components/Options";
import { useGlobalContext } from "../Context";
const Landing = () => {
  const { isLoading, jobs } = useGlobalContext();

  if (isLoading === true) return <Loading />;
  return (
    <main className="landing">
      <div>
        {" "}
        <Options />
      </div>
      <div>
        {" "}
        {jobs.map((j) => {
          return <Jobs data={j}></Jobs>;
        })}
      </div>
    </main>
  );
};

export default Landing;
