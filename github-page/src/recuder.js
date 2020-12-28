const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "DISPLAY_ALL") {
    return { ...state, isLoading: false, jobs: action.payload };
  }
  if (action.type === "FULL_JOB") {
    return { ...state, isLoadin: false, jobs: action.payload, full_time: true };
  }
  if (action.type === "SHOW_CITY") {
    return { ...state, isLoadin: false, jobs: action.payload };
  }
  if (action.type === "LOCATION") {
    return { ...state, isLoadin: false, jobs: action.payload };
  }
  if (action.type === "JOB") {
    return { ...state, isLoadin: false, job: action.payload };
  }
};

export default reducer;
