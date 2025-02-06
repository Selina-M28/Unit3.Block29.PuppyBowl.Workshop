import React from 'react';
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <header>
        <nav>
    <Link to="/">Home</Link>
    <Link to="/players/:id">Player Details</Link>
    <Link to="/NewPlayerForm">Submit New Player</Link>
    </nav>
    </header>
    
  )
}

export default NavBar