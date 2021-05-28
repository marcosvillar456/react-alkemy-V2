import React from "react";
import "./card.css";
import { ObtenerDatosStorage } from "../../services/services";
import { Link } from "react-router-dom";
ObtenerDatosStorage();
function handleClick(id) {
  let team = JSON.parse(localStorage.getItem("team"));
  team.push(id);
  localStorage.setItem("team", JSON.stringify(team));
  const dataArr = new Set(team);
  let result = [...dataArr];
  localStorage.removeItem("team");
  localStorage.setItem("team", JSON.stringify(result));
}

const Card = ({ Heroe, datos }) => {
  if (datos === true) {
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
          <div className="add">
            <Link to={`/More/${Heroe.id}`}></Link>
          </div>
        </div>
      </div>
    );
  } else if (datos === false) {
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
          <div className="add">
            <button
              id="add"
              className="add"
              onClick={() => handleClick(Heroe.id)}
            >
              <p>Add</p>
            </button>
            <Link to={`/More/${Heroe.id}`}>
              <button className="add">
                <p>more</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default Card;
