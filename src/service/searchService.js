import axios from "axios";

export const searchService = async (search, apiKey, more) => {
  const url = `http://www.omdbapi.com/?s=${search}&apikey=${apiKey}&page=${more}`;

  const response = await axios.get(url);

  return response;
};

export const detailService = async (id, apiKey) => {
  const url = `http://www.omdbapi.com/?i=${id}&apikey=${apiKey}&plot=full`;

  const response = await axios.get(url);

  return response;
};
