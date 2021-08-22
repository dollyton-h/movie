import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import "./homepage.scss";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function Homepage() {
  const [allMovie, setAllMovie] = useState([]);
  const { movieList, loading, error, error_message } = useSelector(
    (state) => state.searchReducer
  );

  return (
    <div>
      <Header />

      {error && (
        <p>
          {error_message}
          {loading === true ? (
            "loading"
          ) : (
            <div className="container">
              {movieList &&
                movieList.map((e) => {
                  return (
                    <div className="card-movie">
                      <Link to={`/${e.imdbID}`}>
                        <div>
                          <img src={e.Poster} />
                          <p>Title : {e.Title}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
            </div>
          )}
        </p>
      )}
    </div>
  );
}

export default Homepage;
