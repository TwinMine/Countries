import { useContext } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import { cardColor } from "../data/cardColor";
import defaultPic from "/public/not-available.png";
import "./card.css";

const Card = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const pokemonName = pokemonData.name;
  const cardBackground =
    pokemonData?.types?.[0]?.type &&
    cardColor.find((item) => item.typ === pokemonData.types[0].type.name)
      ?.backgroundColor;

  const pokemonType = pokemonData?.types?.map((item) => item.type.name);
  const allTypes = cardColor.filter((type) => pokemonType?.includes(type.typ));
  const pokemonId = pokemonData.id;
  const weight = pokemonData.weight / 10;
  const height = pokemonData.height / 10;
  const baseExperience = pokemonData.base_experience;

  return (
    <>
      {pokemonData && pokemonData.name ? (
        <div
          style={{
            backgroundColor: cardBackground,
          }}
          className="pokemon-card"
        >
          <h2>{pokemonName}</h2>
          <div>
          <img
            src={
              (pokemonPicture && pokemonPicture.front === null) ||
              pokemonPicture.front === undefined
                ? defaultPic
                : pokemonPicture.front
            }
            alt={pokemonData.name}
          />
          <img
            src={
              (pokemonPicture && pokemonPicture.back === null) ||
              pokemonPicture.back === undefined
                ? defaultPic
                : pokemonPicture.back
            }
            alt={pokemonData.name}
          /></div>
          <div className="type-container">
            <p>Type:</p>
            <div className="type-div">
              {allTypes.map((item) => (
                <div className="type" key={item.id}>
                  <p>{item.typ}</p>
                  <img src={item.symbol} alt={item.typ} />
                </div>
              ))}
            </div>
          </div>
          <div className="card-informations">
            <p>Order: {pokemonId}</p>
            <p>Weight: {weight} kg</p>
            <p>Height: {height} m</p>
            <p>Base experience: {baseExperience}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
