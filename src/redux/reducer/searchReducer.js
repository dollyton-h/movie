const initialState = {
  movieList: [],
  newMovieList: [],

  loading: false,
  error: false,
  error_message: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH/START":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH/SUCCESS":
      return {
        ...state,
        movieList: action.payload.search,
        //NewMovieList: [action.payload.search, ...state.NewMovieList],
        loading: false,
      };
    case "SEARCH/ERROR":
      return {
        ...state,
        loading: false,
        error: true,
        error_message: action.payload.errorMessage,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
