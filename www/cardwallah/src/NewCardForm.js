import React from "react";

export default function NewCardForm() {

  function handleCardNew(e) {

  }
  return (
    <>
      <input
        type="text"
        placeholder="Card title..."
      />
      <button onClick={handleCardNew} >Add Card</button>
    </>
  );
}