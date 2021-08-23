import React, { useState } from "react";
import Modal from "react-modal";
import Header from "../header/Header";
import "./homepage.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Homepage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [poste, setPoster] = useState("");
  const { movieList, loading, error, error_message } = useSelector(
    (state) => state.searchReducer
  );

  const handleOpenModal = (e) => {
    setPoster(e);
    setModalOpen(true);
  };

  return (
    <div className="home-main">
      <Header />

      {error && (
        <p>
          {error_message === "Incorrect IMDb ID." ? (
            <p className="input-mo">Please Input Movie Name</p>
          ) : (
            <p className="error-msg">{error_message}</p>
          )}
          {loading === true ? (
            <p className="loading">Loading</p>
          ) : (
            <div className="container">
              {movieList &&
                movieList.map((e) => {
                  return (
                    <div className="card-movie">
                      <div>
                        <img
                          src={e.Poster}
                          onClick={() => {
                            handleOpenModal(e);
                          }}
                          alt="list-poster"
                        />
                        <Link to={`/${e.imdbID}`}>
                          <p>{e.Title}</p>
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </p>
      )}

      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <img className="modal-poster" src={poste.Poster} alt="modal-poster" />
      </Modal>
    </div>
  );
}

export default Homepage;
