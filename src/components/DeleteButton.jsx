import React from 'react'
import axios from "axios";

function DeleteButton({id, onDelete}) {
    const handleDelete = async () => {
        try {
          await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2412-FTB-ET-WEB-FT/players/${id}`);
          console.log(`Post with ID ${id} deleted successfully`);
          onDelete(id);
        } catch(error) { 
          console.error("Error deleting post:", error);
        }
    };

  return (
    <>
    <button onClick={handleDelete}>Delete Player</button>
    </>
  )
}

export default DeleteButton