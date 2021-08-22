import React, { useState, useEffect } from "react";
import { detailsAsync } from "../../redux/action/detailsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import "./detailpage.scss";

function Detailpage({ match }) {
  const [id, setId] = useState(match.params.id);
  const [apiKey] = useState("f69f0628");

  const { loading, error, error_message } = useSelector(
    (state) => state.detailsReducer
  );

  const { Title, Poster, Year, Genre, Actors } = useSelector(
    (state) => state.detailsReducer.movieDetails
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsAsync(id, apiKey));
  }, [id]);
  return (
    <div className="details-container">
      <div className="left-side">
        <h2>
          {Title}({Year})
        </h2>
        <img src={Poster} />
        <p>{Genre}</p>
        <p>{Actors}</p>
      </div>
    </div>
  );
}

export default Detailpage;
