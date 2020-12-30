import React from "react";
import { useGlobalContext } from "../Context";
import { FaSistrix } from "react-icons/fa";

const Options = () => {
  const {
    fetchFullJob,
    fetchLondonjob,
    fetchJobByLocation,
  } = useGlobalContext();
  const handleCheckbox = (e) => {
    e.preventDefault();
    fetchFullJob();
  };
  const handleLondon = (e) => {
    e.preventDefault();
    fetchLondonjob(e.target.value);
  };
  const handleChange = (e) => {
    fetchJobByLocation(e.target.value);
  };
  return (
    <aside className="opt">
      <form>
        <div className="opt__checkbox__div">
          <input
            className="opt_checkbox"
            type="checkbox"
            name="time"
            id="time"
            onClick={handleCheckbox}
          ></input>
          <span className="opt__span">Full Time</span>
        </div>
        <div className="opt__input__div">
          <span className="opt__location">Location</span>
          <i>
            <FaSistrix className="opt__search"></FaSistrix>
          </i>
          <input
            name="city"
            id="city"
            type="text"
            className="opt__input"
            onChange={handleChange}
            placeholder="City,State,Zip code or country"
          ></input>
        </div>
        <div className="radio__btn">
          <table className="opt__table">
            <tbody>
              <tr className="opt_row">
                <td className="opt_td">
                  <input
                    type="radio"
                    name="london"
                    id="london"
                    value="london"
                    onClick={handleLondon}
                  />
                </td>
                <td>
                  London
                  {/* <span className="opt_name">London</span> */}
                </td>
              </tr>
              <tr className="opt_row">
                <td className="opt_td">
                  <input
                    type="radio"
                    name="amsterdam"
                    id="amsterdam"
                    value="amsterdam"
                    onClick={handleLondon}
                  ></input>
                </td>
                <td className="opt_td">
                  Amsterdam
                  {/* <span className="opt_name">amsterdam</span> */}
                </td>
              </tr>
              <tr className="opt_row">
                <td className="opt_td">
                  <input
                    type="radio"
                    name="newyork"
                    id="newyork"
                    onClick={handleLondon}
                    value="newyork"
                  ></input>
                </td>
                <td className="opt_td">New York</td>
              </tr>
              <tr className="opt_row">
                <td className="opt_td">
                  <input
                    type="radio"
                    name="berlin"
                    id="berlin"
                    value="berlin"
                    onClick={handleLondon}
                  ></input>
                </td>
                <td className="opt_td">Berlin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </aside>
  );
};

export default Options;
