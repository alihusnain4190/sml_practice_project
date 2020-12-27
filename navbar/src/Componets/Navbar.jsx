import React from "react";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { amount } = useGlobalContext();
  return (
    <nav>
      <h1>Use Reducer</h1>
      <p>Total amount: {amount}</p>
    </nav>
  );
};

export default Navbar;
