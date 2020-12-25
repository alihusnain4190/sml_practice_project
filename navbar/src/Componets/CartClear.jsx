import React from "react";
import { useGlobalContext } from "../context";
const CartClear = () => {
  const { clearCart } = useGlobalContext();
  return (
    <div>
      <button onClick={clearCart}>clear Cart</button>
    </div>
  );
};

export default CartClear;
