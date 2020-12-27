const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "DISPLAY_ALL") {
    return { ...state, isLoading: false, jobs: action.payload };
  }
};

export default reducer;
