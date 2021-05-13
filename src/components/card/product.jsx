import React from "react";
import "./card.css";
import { ObtenerDatosStorage } from "../../services/services";
import { Link } from "react-router-dom";

let team = [];
ObtenerDatosStorage();

function handleClick(id) {
  team.push(id);
  localStorage.setItem("team", JSON.stringify(team));
}

const Product = ({ Heroe }) => {
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
        <Link to={`/${Heroe.id}`}>
          <button variant="outline-dark mb-2">more</button>
        </Link>
      </div>
    </div>
  );
};
export default Product;
