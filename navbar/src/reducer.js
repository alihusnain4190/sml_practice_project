const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const newState = state.cart.filter((data) => {
      if (data.id !== action.payload) {
        return data;
      }
    });
    return { ...state, cart: newState };
  }
  if (action.type === "INCREMENT") {
    const newState = state.cart.map((c) => {
      if (c.id === action.payload) {
        return { ...c, amount: c.amount + 1 };
      }
      return c;
    });
    // console.log(newState);
    return { ...state, cart: newState };
  }
  if (action.type === "DECREMENT") {
    const newState = state.cart
      .map((c) => {
        if (c.id === action.payload) {
          return { ...c, amount: c.amount-- };
        }
        return c;
      })
      .filter((c) => {
        return c.amount !== 0;
      });
    return { ...state, cart: newState };
  }
  if (action.type === "TOTAL") {
    const result = state.cart.reduce(
      (total, curValue) => {
        const { amount, price } = curValue;
        total.amount += amount;
        total.total = total.amount * price;
        return total;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, total: result.total.toFixed(2), amount: result.amount };
  }
  return state;
};

export default reducer;
