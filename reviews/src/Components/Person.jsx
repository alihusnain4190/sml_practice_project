import React, { useState } from "react";
import data from "../data";
import SinglePerson from "./SinglePerson";

const Person = () => {
  const { id, name, job, image, text } = data[0];
  const [persons, setPersons] = useState(data);
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
        <p className="person__text__p">{text}</p>
      </div>
    </main>
  );
};

export default Person;
