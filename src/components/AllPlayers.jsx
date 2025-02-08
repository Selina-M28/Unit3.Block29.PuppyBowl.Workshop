import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "./DeleteButton";
import NewPlayerForm from "./NewPlayerForm";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [displayedPlayers, setDisplayedPlayers] = useState([]);

  useEffect(() => {
    axios(
      "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/"
    )
      .then((data) => {
        console.log(data.data.data.players);
        setPlayers(data.data.data.players);
        setDisplayedPlayers(data.data.data.players);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleInput = (e) => {
    const results = players.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDisplayedPlayers(results);
  };

  const handleDelete = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    setDisplayedPlayers(updatedPlayers);
  };

  const handleAddPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
    setDisplayedPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  return (
    <div>
      <NewPlayerForm onAddPlayer={handleAddPlayer} />
      <div>
        <label className="search-box">
          Search:
          <input className="search-box2" type="text" onChange={handleInput} />
        </label>
        {displayedPlayers.map((player) => (
          <Player key={player.id} player={player} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

function Player({ player, onDelete }) {
  return (
    <section className="player-container">
      <div className="all-players">
        <p>
          <img
            className="player-image"
            src={player.imageUrl}
            alt={`Image of ${player.name}`}
          />
        </p>
        <p>Name:{player.name}</p>
        <p>Breed: {player.breed}</p>
        <Link to={`players/${player.id}`}>
          <button>Player Details</button>
        </Link>
        <DeleteButton id={player.id} onDelete={onDelete} />
      </div>
    </section>
  );
}

export default AllPlayers;
