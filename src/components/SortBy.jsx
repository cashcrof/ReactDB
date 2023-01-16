import React from "react";

const SortBy = (props) => {
  return (
    <>
      <select
        name="sort"
        id="sort"
        value={props.sortBy}
        onChange={(e) => {
          props.setSort(e.target.value);
          props.setSearch("");
        }}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="now_playing">Now Playing</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </>
  );
};

export default SortBy;
