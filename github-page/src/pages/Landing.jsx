import React from "react";
import Loading from "../Components/Loading";
import Jobs from "../Components/Jobs";
import { useGlobalContext } from "../Context";
const Landing = () => {
  const { isLoading, jobs } = useGlobalContext();

  if (isLoading === true) return <Loading />;
  return (
    <main>
      {jobs.map((j) => {
        return <Jobs data={j}></Jobs>;
      })}
    </main>
  );
};

export default Landing;
