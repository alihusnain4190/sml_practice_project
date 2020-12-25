import React from "react";
import { useGlobalContext } from "../context";
const TotalAmount = () => {
  const { total } = useGlobalContext();
  return (
    <div>
      <h1>Total amount</h1>
      <p>{total}</p>
    </div>
  );
};

export default TotalAmount;
