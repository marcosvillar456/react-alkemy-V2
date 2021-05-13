import React from "react";

import { ObtenerDatosStorage } from "../../services/services";

let team = [];
ObtenerDatosStorage();

function handleClick(id) {
  team.push(id);
  localStorage.setItem("team", JSON.stringify(team));
}

const CardMore = ({ Heroe }) => {
  return (
    <div className="card">
      <div className="card_image">
        <img src={Heroe.images.lg} alt={Heroe.name} />
      </div>
      <div className="card_content">
        <h2 className="card_title">{Heroe.name}</h2>
        <p className="card_text">
          Combat:<span>{Heroe.powerstats.combat}</span> <br></br>
          durability:<span>{Heroe.powerstats.durability}</span>
          <br></br>
          intelligence:
          <span>{Heroe.powerstats.intelligence}</span>
          <br></br>
          power:<span>{Heroe.powerstats.power}</span> <br></br>
        </p>
        <button
          size="small"
          color="primary"
          onClick={() => handleClick(Heroe.id)}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default CardMore;
