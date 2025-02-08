import React, {useState} from "react";
import axios from "axios";

const NewPlayerForm = ({onAddPlayer}) => {
  const [name, setName] = useState("");    
  const [breed, setBreed] = useState("");  
  const [imageUrl, setImageUrl] = useState("");  


  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerData = {
      name: name,
      breed: breed,
      imageUrl: imageUrl,
    };

    try {
      const response = await axios.post(
        "https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/",   
        playerData,                     
        {
          headers: {
            "Content-Type": "application/json", 
          },
        }
      );

      console.log("Player added:", response.data);
      onAddPlayer(response.data.data.player);

      setName("");
      setBreed("");
      setImageUrl("");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3>Name</h3>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)} 
        />
      </label>
      <label>
        <h3>Breed</h3>
        <input 
        type="text" 
        value={breed}
        onChange={(e) => setBreed(e.target.value)} 
        />
      </label>
      <label>
        <h3>Image</h3>
        <input type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}  />
      </label>
      <button type="submit" className="add-player-button">Add New Player</button>
    </form>
  );
}

export default NewPlayerForm;
