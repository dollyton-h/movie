const initialState = {
  movieDetails: "",
  loading: false,
  error: false,
  error_message: "",
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAILS/START":
      return {
        ...state,
        loading: true,
      };
    case "DETAILS/SUCCESS":
      return {
        ...state,
        movieDetails: action.payload.movieDetails,
        //NewMovieList: [action.payload.search, ...state.NewMovieList],
        loading: false,
      };
    case "DETAILS/ERROR":
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

export default detailsReducer;
