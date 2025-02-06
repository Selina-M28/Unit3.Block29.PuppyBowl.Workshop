import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState();

  useEffect(() => {
    axios(
      `https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`
    )
      .then((data) => {
        console.log(data.data.data.player);
        setPlayer(data.data.data.player);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>{player?.name}</h2>
      <p>
        <img src={player?.imageUrl} alt={`Image of ${player?.name}`} />
      </p>
      <p>{player?.breed}</p>
      <p>{player?.status}</p>
      <p>Team Number: {player?.teamId}</p>
    </div>
  );
}

export default SinglePlayer;
