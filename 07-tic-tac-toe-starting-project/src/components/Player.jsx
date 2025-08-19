import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);

  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    /*
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    } Es mejor escribir esto ↓ */
    /*setIsEditing(!isEditing);*/

    //aun mejor es escribir esto
    setIsEditing((editing) => !editing);
  }

  let playerNameHTMLCode = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameHTMLCode = (
      //THIS IS CALLED TO-WAY-BINDING because we are getting a value out
      //and we are feeding a value into the input
      <input
        type="text"
        required
        onChange={handleChange}
        value={playerName}
      ></input>
    );
  }

  function handleChange(event) {
    //aqui se obtiene el acceso a lo que el usuario escribio
    setPlayerName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {playerNameHTMLCode}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
