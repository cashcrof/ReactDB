import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BASE_PATH = "https://image.tmdb.org/t/p/w500";

function Details() {
  const [movie, setMovie] = useState([]);
  let { movieId } = useParams();

  const getMovie = async () => {
    let url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=148ca309c3bdcfa772f8c3d5480066dd&language=en-US`;
    const response = await fetch(url);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovie(responseJson);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="details">
        <img src={BASE_PATH + movie.poster_path} alt="movie" />
        <div>
          <h2>{movie.original_title}</h2>
          <p>{movie.overview}...</p>
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
      <Footer />
    </>
  );
}

export default Details;
