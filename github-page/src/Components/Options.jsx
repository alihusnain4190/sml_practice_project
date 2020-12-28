import React from "react";
import { useGlobalContext } from "../Context";
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
            type="checkbox"
            name="time"
            id="time"
            onClick={handleCheckbox}
          ></input>
          <span>Full Time</span>
        </div>
        <div className="opt__input__div">
          <input
            name="city"
            id="city"
            type="text"
            onChange={handleChange}
            placeholder="City,State,Zip code or country"
          ></input>
        </div>
        <div className="radio__btn">
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="london"
                    id="london"
                    value="london"
                    onClick={handleLondon}
                  />
                </td>
                <td>London</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="amsterdam"
                    id="amsterdam"
                    value="amsterdam"
                    onClick={handleLondon}
                  ></input>
                </td>
                <td>Amsterdam</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="newyork"
                    id="newyork"
                    onClick={handleLondon}
                    value="newyork"
                  ></input>
                </td>
                <td>New York</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="radio"
                    name="berlin"
                    id="berlin"
                    value="berlin"
                    onClick={handleLondon}
                  ></input>
                </td>
                <td>Berlin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </aside>
  );
};

export default Options;
