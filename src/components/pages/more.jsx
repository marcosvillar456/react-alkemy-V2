import React, { useEffect, useState } from "react";
import { getAllHeroes } from "../../services/services";
import { useParams } from "react-router-dom";
import CardMore from "../card_More/card_More";

const More = () => {
  const { id } = useParams();
  const [Heroes, setHeroes] = useState([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function datos() {
      const response = await getAllHeroes(
        `https://akabab.github.io/superhero-api/api/id/${id}.json`
      );
      setHeroes(response);
      setLoading(true);
    }
    datos();
  }, [id]);

  if (Loading === false) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      {
        <li key={Heroes.id} className="cards_item">
          <CardMore Heroe={Heroes} />
        </li>
      }
    </div>
  );
};

export default More;
