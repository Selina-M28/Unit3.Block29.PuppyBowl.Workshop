import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <h1>Puppy Bowl Roster <img class="header-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Sport_football.svg/165px-Sport_football.svg.png" alt="image of football"/></h1>
      <nav className="header">
        <Link to="/">Home</Link>
        <Link to="/NewPlayerForm">Submit New Player</Link>
      </nav>
    </header>
  );
}

export default NavBar;
