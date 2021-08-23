import React, { useState, useEffect, useRef } from "react";
import "./header.scss";

import { useDispatch } from "react-redux";
import { searchAsync } from "../../redux/action/searchAction";

function Header() {
  const [search, setSearch] = useState("");
  const [apiKey] = useState("f69f0628");
  const [more, setMore] = useState(1);

  const dispatch = useDispatch();
  const searchForm = useRef(null);

  const handleClickEvent = () => {
    const form = searchForm.current;
    setSearch(`${form["search"].value}`);
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
          <input name={"search"} />
        </form>
        <button onClick={handleClickEvent}>Search Movie</button>
        <button onClick={moreHandle}>More Movie...</button>
      </div>
      <hr />
    </div>
  );
}

export default Header;
