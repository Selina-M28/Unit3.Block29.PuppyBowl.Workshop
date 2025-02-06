import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AllPlayers() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    axios(
      "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/"
    )
      .then((data) => {
        console.log(data.data.data.players);
        setPlayers(data.data.data.players);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {players.map((player) => (
        <Player key={player.id} player={player} />
      ))}
    </div>
  );
}

function Player({ player }) {
  return (
    <div className="AllPlayers">
    <img src={player.imageUrl} alt={`Image of ${player.name}`}/>
    <p>{player.name}</p>
    <p>{player.breed}</p>
    </div>
  );
}

export default AllPlayers;
