import React from "react";
import heartIcon from "../assets/heart.svg";
import emptyIcon from "../assets/empty-heart.svg";
import { useEffect } from "react";

const FavouriteIcon = (props) => {
  let favsIds;
  try {
    favsIds = props.favourites.map((fav, index) => {
      return fav.id;
    });
  } catch {
    favsIds = [];
  }
  const icon = favsIds.includes(props.movieId) ? (
    <>
      <img src={heartIcon} />
    </>
  ) : (
    <>
      <img src={emptyIcon} />
    </>
  );

  return icon;
};
export default FavouriteIcon;
