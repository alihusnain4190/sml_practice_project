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
  return state;
};

export default reducer;
