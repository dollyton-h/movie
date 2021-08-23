import React, { useState, useEffect } from "react";
import { detailsAsync } from "../../redux/action/detailsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./detailpage.scss";

function Detailpage({ match }) {
  const [active, setActive] = useState({ det: true, rat: false });
  const [id] = useState(match.params.id);
  const [apiKey] = useState("f69f0628");

  const history = useHistory();

  const { loading, error, error_message } = useSelector(
    (state) => state.detailsReducer
  );

  const { Title, Poster, Year, Rated } = useSelector(
    (state) => state.detailsReducer.movieDetails
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsAsync(id, apiKey));
  }, [id]);

  const handleDetails = () => {
    setActive({ det: true, rat: false });
  };

  const handleRating = () => {
    setActive({ det: false, rat: true });
  };

  const showDet = active.det ? <Det /> : null;
  const showRat = active.rat ? <Rat /> : null;
  return (
    <div className="details-container">
      {loading === true ? (
        "loading"
      ) : (
        <div className="left-side">
          <div className="plot-sinopsis">
            <img src={Poster} alt="detail-poster" />
            <div className="details-right">
              <h2>
                {Title} ({Year})<br />
                <span>{Rated}</span>
              </h2>
              <br />
              <button
                className={`btn1-${active.det ? "active" : null}`}
                onClick={handleDetails}
              >
                Details
              </button>
              <button
                className={`btn1-${active.rat ? "active" : null}`}
                onClick={handleRating}
              >
                Rating
              </button>

              <hr />
              {showDet}
              {showRat}
            </div>
            <button className="find-movie" onClick={(e) => history.push("/")}>
              Find Another Movie
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Det() {
  const { Title, Poster, Year, Genre, Actors, Plot } = useSelector(
    (state) => state.detailsReducer.movieDetails
  );
  return (
    <div>
      <div className="details">
        <p>
          <span>About The Movie</span>
          <br /> {Plot}
        </p>
        <p className="details-actor">{Actors}</p>
        <p className="details-genre"> {Genre}</p>
      </div>
    </div>
  );
}

function Rat() {
  const { Ratings } = useSelector((state) => state.detailsReducer.movieDetails);
  return (
    <div>
      <div className="rating">
        {Ratings.map((e) => {
          return (
            <div className="rating-details">
              <p>
                {e.Source}
                <span>{e.Value}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Detailpage;
