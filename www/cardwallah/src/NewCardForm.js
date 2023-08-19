import React from "react";
import uuidv4 from "uuid/v4";

export default function NewCardForm() {
  const cardNameRef = React.useRef(null);

  function handleCardNew(e) {
    const name = cardNameRef.current.value;
    if (name === '') return;
    
    cardNameRef.current.value = null;
  }

  return (
    <>
      <input
        type="text"
        placeholder="Card title..."
        ref={cardNameRef} 
      />
      <button onClick={handleCardNew} >Add Card</button>
    </>
  );
} 