import React from "react";
import MovieListHeading from "../components/MovieListHeading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="App">
      <Navbar />
      <MovieListHeading heading="About" />

      <section className="about">
        <div>
          <h3>Welcome to ReactDB</h3>
          <p>
            ReactDB is a sample movie database application built in ReactJS.
          </p>
          <p>
            Here, you can browse popular films, search for your favourites, or
            look for movies to watch later!
          </p>
          <p>
            ReactDB uses the <a href="https://www.themoviedb.org/">TMDB API</a>.
          </p>
        </div>

        <div>
          <h3>About the Dev</h3>
          <p>
            ReactDB is made by{" "}
            <a href="https://www.linkedin.com/in/ceilidh-ashcroft">Ceilidh</a>.
          </p>
          <p>
            She is currently studying Software Systems Development at{" "}
            <a href="https://www.bcit.ca">BCIT</a>.
          </p>
          <p>
            Her favourite movie is <Link to="/details/426">Vertigo</Link>.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
