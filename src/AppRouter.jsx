import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import Searchbar from "./components/Searchbar";
import SortBy from "./components/SortBy";
import Footer from "./components/Footer";

function AppRouter() {
  const [favourites, setFavourites] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("popular");

  const getMovies = async () => {
    let url = "";
    if (search != "") {
      url = `https://api.themoviedb.org/3/search/movie?api_key=148ca309c3bdcfa772f8c3d5480066dd&language=en-US&query=${search}&page=1&include_adult=false`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${sort}?api_key=148ca309c3bdcfa772f8c3d5480066dd&language=en-US&page=1`;
    }
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson.results);
    setMovies(responseJson.results.slice(0, 12));
  };

  useEffect(() => {
    getMovies();
  }, [sort, search]);

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
    console.log(favourites.indexOf(movie));
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
    console.log(watchList.indexOf(movie));
  };

  return (
    <div className="App">
      <Navbar />

      <MovieListHeading heading="Movies" />
      <div>
        <Searchbar search={search} setSearch={setSearch} />
        <SortBy
          sortBy={sort}
          setSort={setSort}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <div className="movie-grid">
        <MovieList
          watchlist={watchList}
          favourites={favourites}
          movies={movies}
          handleFavourites={handleFavourites}
          handleWatchList={handleWatchList}
          message="Couldn't fetch movies :("
        />
      </div>
      <Footer />
    </div>
  );
}

export default AppRouter;
