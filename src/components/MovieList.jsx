import React from "react";
import { Link } from "react-router-dom";
import WatchListIcon from "./WatchListIcon";
import FavouriteIcon from "./FavouriteIcon";

const BASE_PATH = "https://image.tmdb.org/t/p/w500";

let divColor = (rating) => {
  const color =
    rating > 7.4 ? "#5B8C5A8c" : rating < 5 ? "#E3655B8c" : "#CFD1868c";

  return color;
};

const MovieList = (props) => {
  const contents =
    props.movies.length > 0 ? (
      <>
        {props.movies.map((movie, index) => (
          <div
            className="movie-container"
            style={{ backgroundColor: divColor(movie.vote_average) }}
          >
            <div className="image-container">
              <Link to={`/details/${movie.id}`}>
                <img
                  src={BASE_PATH + movie.poster_path}
                  alt="movie poster image"
                />
              </Link>
              <div
                className="overlay-1"
                onClick={() => {
                  props.handleFavourites(movie);
                }}
              >
                <FavouriteIcon
                  favourites={props.favourites}
                  movieId={movie.id}
                />
              </div>
              <div
                className="overlay-2"
                onClick={() => {
                  props.handleWatchList(movie);
                }}
              >
                <WatchListIcon watchlist={props.watchlist} movieId={movie.id} />
              </div>
            </div>

            <div>
              <h3 style={{ fontWeight: "boldest" }}>{movie.original_title}</h3>
              <p>{movie.overview.substring(0, 50)}...</p>
              <p>
                Release Date:{" "}
                {new Date(movie.release_date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p>Rating: {movie.vote_average * 10}%</p>
            </div>
          </div>
        ))}
      </>
    ) : (
      <div>
        <h2>{props.message}</h2>
      </div>
    );
  return contents;
};

export default MovieList;
