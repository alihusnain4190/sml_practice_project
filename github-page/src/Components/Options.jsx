import React from "react";
import { useGlobalContext } from "../Context";
const Options = () => {
  const { fetchFullJob } = useGlobalContext();
  const handleCheckbox = (e) => {
    e.preventDefault();
    fetchFullJob();
  };
  return (
    <aside className="opt">
      <form>
        <div className="opt__checkbox__div">
          <input
            type="checkbox"
            name="time"
            id="time"
            onChange={handleCheckbox}
          ></input>
          <span>Full Time</span>
        </div>
        <div className="opt__input__div">
          <input
            name="city"
            id="city"
            type="text"
            placeholder="City,State,Zip code or country"
          ></input>
        </div>
        <div className="radio__btn">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="radio" name="london" id="london" />
                </td>
                <td>London</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="amsterdam" id="amsterdam"></input>
                </td>
                <td>Amsterdam</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="newyork" id="newyork"></input>
                </td>
                <td>New York</td>
              </tr>
              <tr>
                <td>
                  <input type="radio" name="berlin" id="berlin"></input>
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
