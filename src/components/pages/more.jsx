import React, { useEffect, useState } from "react";
import { getAllHeroes } from "../../services/services";
import { useParams } from "react-router-dom";

const More = () => {
  const [Heroes, setHeroes] = useState([]);
  const [Loading, setLoading] = useState(false);
  const { id } = useParams();

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
          <h2>{Heroes.name}</h2>
        </li>
      }
    </div>
  );
};

export default More;
