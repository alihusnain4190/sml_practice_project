import React from "react";
import { useGlobalContext } from "../context";
import CartClear from "./CartClear";
import TotalAmount from "./TotalAmount";
const CartContainer = () => {
  const removeData = (id) => {
    removeItem(id);
  };
  const {
    cart,
    removeItem,
    decrementAmount,
    incrementAmount,
  } = useGlobalContext();
  if (cart.length === 0) {
    return <h1>Cart is empty</h1>;
  }
  return (
    <section>
      {cart.map((cartItem) => {
        const { id, title, price, amount, img } = cartItem;
        return (
          <div className={id}>
            <div>
              <img src={img} alt="no image"></img>
            </div>
            <div>
              <h4>{title}</h4>
              <p>{price}</p>
              <button onClick={() => removeData(id)}>Remove</button>
            </div>
            <div>
              <button onClick={() => incrementAmount(id)}>+1</button>
              <p>{amount}</p>
              <button onClick={() => decrementAmount(id)}>-1</button>
            </div>
          </div>
        );
      })}
      <CartClear />
      <TotalAmount />
    </section>
  );
};

export default CartContainer;
