import React from "react";
import { useGlobalContext } from "../Context";
import Loading from "./Loading";
const Jobs = (props) => {
  const { isLoading } = useGlobalContext();
  const {
    id,
    title,
    type,
    url,
    company,
    location,
    created_at,
    company_logo,
  } = props.data;

  if (isLoading === true) return <Loading />;
  return (
    <section id={id} className="jobs">
      <div className="jobs--wrapper">
        <div className="jobs--wrapper__img">
          <img className="jobs__img" src={company_logo} alt="no image"></img>
        </div>
        <div className="jobs--wrapper__desp">
          <div className="jobs__upper">
            <h5>{company}</h5>
            <p className="jobs__upper_p">{location}</p>
            <p className="jobs__upper_p">{created_at}</p>
          </div>
          <div className="jobs__bottom">
            <h3 className="jobs__bottom__h3"> {title}</h3>
            <button className="btn">{type}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
