import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieListHeading from "../components/MovieListHeading";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";

const BASE_PATH = "https://image.tmdb.org/t/p/w500";

function Favourites() {
  const [favourites, setFavourites] = useState([]);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const movieWatchList = JSON.parse(
      localStorage.getItem("movie-app-watchlist")
    );
    const movieFavourites = JSON.parse(
      localStorage.getItem("movie-app-favourites")
    );
    setFavourites(movieFavourites);
    setWatchList(movieWatchList);
  }, []);

  const saveToLocalStorage = (items, type) => {
    localStorage.setItem(`movie-app-${type}`, JSON.stringify(items));
  };

  const handleFavourites = (movie) => {
    if (!favourites.includes(movie)) {
      const newFavouritesList = [...favourites, movie];
      setFavourites(newFavouritesList);
      saveToLocalStorage(newFavouritesList, "favourites");
    } else {
      const newFavouritesList = favourites.filter(
        (favourite) => favourite.id !== movie.id
      );
      setFavourites(newFavouritesList);
      saveToLocalStorage(newFavouritesList, "favourites");
    }
  };

  const handleWatchList = (movie) => {
    if (!watchList.includes(movie)) {
      const newWatchList = [...watchList, movie];
      setWatchList(newWatchList);
      saveToLocalStorage(newWatchList, "watchlist");
    } else {
      const newWatchList = watchList.filter(
        (watchListItem) => watchListItem.id !== movie.id
      );
      setWatchList(newWatchList);
      saveToLocalStorage(newWatchList, "watchlist");
    }
  };

  return (
    <div className="App">
      <Navbar />
      <div>
        <MovieListHeading heading={"Favourites"} />
      </div>

      <div className="movie-grid">
        <MovieList
          movies={favourites}
          favourites={favourites}
          watchlist={watchList}
          handleFavourites={handleFavourites}
          handleWatchList={handleWatchList}
          message="Hard to please? No favourites yet."
        />
      </div>
      <Footer />
    </div>
  );
}

export default Favourites;
