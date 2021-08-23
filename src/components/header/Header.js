import React, { useState, useEffect, useRef } from "react";
import "./header.scss";

import { useDispatch } from "react-redux";
import { searchAsync } from "../../redux/action/searchAction";
import axios from "axios";

function Header() {
  const [search, setSearch] = useState("");
  const [apiKey] = useState("f69f0628");
  const [more, setMore] = useState(1);
  const [auto, setAuto] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const loadSearch = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${text}&apikey=${apiKey}&page=${more}`
      );
      console.log(response.data.Search);
      setAuto(response.data.Search);
    };
    loadSearch();
  }, [text]);

  const onChangeHandler = (text) => {
    setText(text);
  };

  const dispatch = useDispatch();
  const searchForm = useRef(null);

  const handleClickEvent = () => {
    const form = searchForm.current;
    setSearch(`${form["search"].value}`);
    setText("");
  };

  const moreHandle = () => {
    setMore(more + 1);
  };

  useEffect(() => {
    dispatch(searchAsync(search, apiKey, more));
  }, [search, more]);
  console.log(more, "kompo");
  return (
    <div>
      <div className="header-main">
        <form ref={searchForm}>
          <input
            onChange={(e) => onChangeHandler(e.target.value)}
            value={text}
            name={"search"}
          />
          <div>
            {auto &&
              auto.map((e) => {
                return (
                  <div
                    key={e.imdbID}
                    onClick={() => setText(e.Title)}
                    className="auto-c"
                  >
                    {e.Title}
                  </div>
                );
              })}
          </div>
        </form>
        <button onClick={handleClickEvent}>Search Movie</button>
        <button onClick={moreHandle}>More Movie...</button>
      </div>
      <hr />
    </div>
  );
}

export default Header;
