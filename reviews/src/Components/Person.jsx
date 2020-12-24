import React, { useState } from "react";
import data from "../data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Person = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];
  const [readMore, setReadMore] = useState(false);
  const handleIncrement = () => {
    if (index < data.length - 1) setIndex(index + 1);
  };
  const handleDecrement = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const hadnleSurparise = () => {
    const number = Math.floor(Math.random() * data.length + 1);

    setIndex(number - 1);
  };
  return (
    <main className="person">
      <div className="person__img__wrapper">
        <img className="person__img" src={image} alt="img"></img>
      </div>
      <div className="person__name__wrapper">
        <span className="person__name">{name}</span>
        <p className="person__job">{job}</p>
      </div>
      <div className="person__text">
        <p className="person__text__p">
          {readMore ? text : `${text.substr(0, 30)}`}
        </p>

        <button
          className="person__btn"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          {readMore ? "Read More" : "Read Less"}
        </button>
      </div>
      <div className="btn__container">
        <button className="btn__left" onClick={handleDecrement}>
          {">"}
        </button>
        <button className="btn__right" onClick={handleIncrement}>
          {"<"}
        </button>
      </div>
      <div className="btn__sur__container">
        <button className="btn_sur" onClick={hadnleSurparise}>
          Surparise Me
        </button>
      </div>
    </main>
  );
};

export default Person;
