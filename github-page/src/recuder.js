const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }
  if (action.type === "DISPLAY_ALL") {
    return { ...state, isLoading: false, jobs: action.payload };
  }
  if (action.type === "FULL_JOB") {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload,
      full_time: true,
    };
  }
  if (action.type === "SHOW_CITY") {
    return { ...state, isLoading: false, jobs: action.payload };
  }
  if (action.type === "LOCATION") {
    return { ...state, isLoading: false, jobs: action.payload };
  }
  if (action.type === "JOB") {
    return { ...state, isLoading: false, job: action.payload };
  }
  if (action.type === "SEARCH_JOB") {
    console.log(action.payload);
    return { ...state, isLoading: false, jobs: action.payload };
  }
};

export default reducer;
