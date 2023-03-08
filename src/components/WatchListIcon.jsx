import React from "react";
import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

const WatchListIcon = (props) => {
  let watchlistIds;
  try {
    watchlistIds = props.watchlist.map((item, index) => {
      return item.id;
    });
  } catch {
    watchlistIds = [];
  }

  const icon = watchlistIds.includes(props.movieId) ? (
    <>
      <img src={minusIcon} />
    </>
  ) : (
    <>
      <img src={plusIcon} />
    </>
  );

  return icon;
};
export default WatchListIcon;
