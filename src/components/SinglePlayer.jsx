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
    <div className="single-player-details">
      <h2>{player?.name}</h2>
      <p className="details-image">
        <img src={player?.imageUrl} alt={`Image of ${player?.name}`} />
      </p>
      <p><b>Breed: </b>{player?.breed}</p>
      <p><b>Status: </b>{player?.status}</p>
      <p><b>Team Number: </b>{player?.teamId}</p>
    </div>
  );
}

export default SinglePlayer;
