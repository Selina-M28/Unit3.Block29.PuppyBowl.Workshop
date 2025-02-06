import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SinglePlayer from "./SinglePlayer";

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

  //   console.log(results);

  return (
    <div>
      <label>
        Search:
        <input type="text" onChange={handleInput} />
      </label>
      {displayedPlayers.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}

function Player({ player }) {
  return (
    <div className="AllPlayers">
      <p>
        <img src={player.imageUrl} alt={`Image of ${player.name}`} />
      </p>
      <p>{player.name}</p>
      <p>{player.breed}</p>
      <button>Player Details</button>
    </div>
  );
}

export default AllPlayers;
