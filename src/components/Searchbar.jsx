import React from "react";
import MovieList from "./MovieList";

const Searchbar = (props) => {
  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        value={props.search}
        placeholder="Search by movie title"
        onChange={(e) => {
          props.setSearch(e.target.value);
        }}
      />
    </>
  );
};

export default Searchbar;
