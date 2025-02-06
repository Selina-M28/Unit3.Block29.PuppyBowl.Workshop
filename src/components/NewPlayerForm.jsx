import React from 'react'

function NewPlayerForm() {
  return (
    <form>
      <label>
        <h3>Name</h3>
        <input type="text" />
      </label>
        <label>
          <h3>Breed</h3>
          <input type="text" />
        </label>
      <label>
        <h3>Image</h3>
        <input type="text" />
      </label>
      <button>Add New Player</button>
    </form>
  )
}

export default NewPlayerForm