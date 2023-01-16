import React from "react";
import { NavLink } from "react-router-dom";
import filmLogo from "../assets/film.svg";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img className="logo" src={filmLogo} alt="Movie DB Logo" />
        <h2 className="logo-text">ReactDB</h2>
      </NavLink>
      <div>
        <NavLink className="navigation" to="/">
          Home
        </NavLink>
        <NavLink className="navigation" to="/favourites">
          Favourites
        </NavLink>
        <NavLink className="navigation" to="/watchlist">
          Watch List
        </NavLink>
        <NavLink className="navigation" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
