import { searchService } from "../../service/searchService";

export const searchStart = () => {
  return {
    type: "SEARCH/START",
  };
};

export const searchSuccess = (search, apiKey, more) => {
  return {
    type: "SEARCH/SUCCESS",
    payload: { search, apiKey, more },
  };
};

export const searchError = (errorMessage) => {
  return {
    type: "SEARCH/ERROR",
    payload: { errorMessage },
  };
};

export const searchAsync = (search, apiKey, more) => {
  return (dispatch) => {
    dispatch(searchStart());

    searchService(search, apiKey, more)
      .then((response) => {
        console.log(response);

        dispatch(searchSuccess(response.data.Search));
        dispatch(searchError(response.data.Error));
      })
      .catch((error) => {
        //console.log(error.data.Error);
        //dispatch(searchError(error.data.Error));
      });
  };
};
