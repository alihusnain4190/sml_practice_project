import React, { useState, useEffect } from "react";
import people from "../data";
const Lists = () => {
  const [data, setData] = useState(people);
 
  const handleClear = () => {
    setData([]);
  };
  if (data.length === 0)
    return (
      <div className="birthday">
        <h1 className="birthday__h1">0 birthday today</h1>
        <button onClick={handleClear} className="btn">
          ClearAll
        </button>
      </div>
    );
  return (
    <section className="birthday">
      <h1 className="birthday__h1">{data.length} birthday today</h1>;
      {data.map((d) => {
        const { id, name, age, image } = d;
        return (
          <article key={id}>
            <div className="birthday__container">
              <div>
                <img src={image} alt="image" className="birthday__image" />
              </div>
              <div className="birthday__text">
                <h4>{name}</h4>
                <p className="birthday__p">{age} years</p>
              </div>
            </div>
          </article>
        );
      })}
      <button onClick={handleClear} className="btn">
        ClearAll
      </button>
    </section>
  );
};

export default Lists;
