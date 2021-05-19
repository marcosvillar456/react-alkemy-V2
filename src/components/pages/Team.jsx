import React, { useEffect, useState } from "react";
import { getAllHeroes } from "../../services/services";
import Card from "../card/card";
import { Delete } from "../../services/services";
const Team = () => {
  const [Heroes, setHeroes] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    let getTeam = localStorage.getItem("team");
    let datos_heroes = [];
    let team = JSON.parse(getTeam);
    async function get() {
      if (team.length > 0) {
        for (let i = 0; i < team.length; i++) {
          let datos = await getAllHeroes(
            `https://akabab.github.io/superhero-api/api/id/${team[i]}.json`
          );
          datos_heroes.push(datos);
        }
        setHeroes(datos_heroes);

        setLoading(true);
      }
    }
    get();
  }, []);

  if (Loading === false) {
    return <h2>Ingrese Heroes</h2>;
  }

  return (
    <div className="cards">
      {Heroes.map((Heroe) => (
        <li key={Heroe.id} className="cards_item">
          <Card Heroe={Heroe} />
          <button onClick={() => Delete(Heroe.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
};
export default Team;
