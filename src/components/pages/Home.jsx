import Card from "../card/card";
import React, { useEffect, useState } from "react";
import { getAllHeroes } from "../../services/services";

//se declara la URL base
const baseUrl = "https://akabab.github.io/superhero-api/api/all.json";

const Home = () => {
  const [Heroes, setHeroes] = useState([]);
  const [Loading, setLoading] = useState(false);

  //obtiene los datos de la API y los guarda en Heroes
  useEffect(() => {
    async function datos() {
      const response = await getAllHeroes(baseUrl);
      setHeroes(response);
      //al pasar terminar de guardar los datos en Heroes cambia el valos de setLoading a true
      setLoading(true);
    }
    datos();
  }, []);

  //Funcion para el boton mostrar mas
  const [visible, setVisible] = useState(12);
  const ShowMoreHeroes = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  if (Loading === false) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="cards">
      {Heroes.slice(0, visible).map((Heroe) => (
        <li key={Heroe.id} className="cards_item">
          <Card Heroe={Heroe} />
        </li>
      ))}

      <button onClick={ShowMoreHeroes}>Show More</button>
    </div>
  );
};
export default Home;
