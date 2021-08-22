import { detailService } from "../../service/searchService";

export const detailsStart = () => {
  return {
    type: "DETAILS/START",
  };
};

export const detailsSuccess = (movieDetails) => {
  return {
    type: "DETAILS/SUCCESS",
    payload: { movieDetails },
  };
};

export const detailsError = (errorMessage) => {
  return {
    type: "DETAILS/ERROR",
    payload: { errorMessage },
  };
};

export const detailsAsync = (id, apiKey) => {
  return (dispatch) => {
    dispatch(detailsStart());

    detailService(id, apiKey)
      .then((response) => {
        console.log(response.data);

        dispatch(detailsSuccess(response.data));
        //dispatch(detailsError(response));
      })
      .catch((error) => {
        //console.log(error.data.Error);
        //dispatch(searchError(error.data.Error));
      });
  };
};
