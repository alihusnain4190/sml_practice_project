import React from "react";
import twitter from "../img/tw.png";

import facebook from "../img/fb.png";

import google from "../img/gp.png";
const Form = () => {
  return (
    <div className="hero">
      <div className="form-box">
        <div className="button-box">
          <div className="btn"></div>
          <button type="button" className="toggle-btn">
            Log in
          </button>
          <button type="button" className="toggle-btn">
            Register
          </button>
        </div>
        <div className="social-icons">
          <img className="social-icons-img" src={twitter}></img>
          <img className="social-icons-img" src={facebook}></img>
          <img className="social-icons-img" src={google}></img>
        </div>
      </div>
    </div>
  );
};

export default Form;
