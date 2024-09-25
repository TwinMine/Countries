import { useContext, useEffect, useState } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import { cardColor } from "../data/cardColor";
import defaultPic from "/not-available.png";
import "./card.css";
import SecondDataFetch from "../../context/SecondDataFetch";
import PokemonCounter from "../../context/PokemonCounter";
import { typeFunction } from "../function/TypeFunction";

const Card = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
  const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);
  const [language, setLanguage] = useState("en");

  const cardBackground =
    pokemonData?.types?.[0]?.type &&
    cardColor.find((item) => item.typ === pokemonData.types[0].type.name)
      ?.backgroundColor;

  const pokemonType = pokemonData?.types?.map((item) => item.type.name);
  const allTypes = cardColor.filter((type) => pokemonType?.includes(type.typ));
  const [typeLanguage, setTypeLanguage] = useState([])
  const pokemonId = pokemonData.id;
  const weight = pokemonData.weight / 10;
  const height = pokemonData.height / 10;
  const baseExperience = pokemonData.base_experience;


useEffect(() => {
  typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage , setTypeLanguage, language)
},[language])
useEffect(() => {
if(typeLanguage.length <= 0){
    setTypeLanguage(allTypes)
  }
},[])


console.log(typeLanguage);

 const languageText = [
    {
      name: secondDataFetch?.names?.filter(
        (item) => item.language.name === language
      ),
    },
    {
      animal: secondDataFetch?.genera?.filter(
        (item) => item.language.name === language
      ),
    },
    {
      text: secondDataFetch?.flavor_text_entries?.filter(
        (item) => item.language.name === language
      ),
    },
  ];

const pokemonName = languageText[0]?.name?.[0]?.name || "Unknown Pokemon";
  const pokemonAnimal = languageText[1]?.animal?.[0]?.genus || "Unknown Animal";
  const pokemonText = languageText[2]?.text?.map((item) => item.flavor_text) || [];

  return (
    <>
      {pokemonData && pokemonData.name ? (
        
        <div
          style={{
            backgroundColor: cardBackground,
          }}
          className="pokemon-card"
        >
          <div className="header">
            <h2>{pokemonName}</h2>
            <p>Order: {pokemonId}</p>
          </div>

          <div className="pic-div">
            <img
              style={{
                objectFit:
                  (pokemonPicture && pokemonPicture.front === null) ||
                  pokemonPicture.front === undefined
                    ? "scale-down"
                    : "fill",
              }}
              src={
                (pokemonPicture && pokemonPicture.front === null) ||
                pokemonPicture.front === undefined
                  ? defaultPic
                  : pokemonPicture.front
              }
              alt={pokemonData.name}
            />
            <img
              style={{
                objectFit:
                  (pokemonPicture && pokemonPicture.front === null) ||
                  pokemonPicture.front === undefined
                    ? "scale-down"
                    : "fill",
              }}
              src={
                (pokemonPicture && pokemonPicture.back === null) ||
                pokemonPicture.back === undefined
                  ? defaultPic
                  : pokemonPicture.back
              }
              alt={pokemonData.name}
            />
          </div>
          <div className="type-container">
            <p>Type:</p>
            <div className="type-div">
              {typeLanguage.length <= 0 ? allTypes.map((item) => (
                <div className="type" key={item.id}>
                  <p>{item.typ}</p>
                  <img src={item.symbol} alt={item.typ} />
                </div>
              )) : typeLanguage.map((item) => (
                <div className="type" key={item.id}>
                  <p>{item.typ}</p>
                  <img src={item.symbol} alt={item.typ} />
                </div>
              ))}
            </div>
          </div>
          <div className="card-informations">
            <p>Animal: {pokemonAnimal}</p>
            <p>Weight: {weight} kg</p>
            <p>Height: {height} m</p>
            <p>Base experience: {baseExperience}</p>
          </div>
          <div className="card-text">
            <div className="textButton">
              <button
                disabled={pokemonCounter === 0}
                onClick={() => setPokemonCounter(pokemonCounter - 1)}
              >
                Previos
              </button>
              <button
                disabled={pokemonCounter + 1 === pokemonText?.length}
                onClick={() => setPokemonCounter(pokemonCounter + 1)}
              >
                Next
              </button>
            </div>

            <p>{pokemonText[pokemonCounter]}</p>
          </div><button
  onClick={() => {
    setLanguage("en");
    setPokemonCounter(0);
    typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage , setTypeLanguage, language);
  }}
>
  English
</button>
<button
  onClick={() => {
    setLanguage("es");
    setPokemonCounter(0);
    typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage ,  setTypeLanguage, language);
  }}
>
  Spanish
</button>
<button
  onClick={() => {
    setLanguage("de");
    setPokemonCounter(0);
    typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage , setTypeLanguage, language);
  }}
>
  German
</button>
<button
  onClick={() => {
    setLanguage("ja");
    setPokemonCounter(0);
    typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage , setTypeLanguage, language);
  }}
>
  Japanese
</button>
<button
  onClick={() => {
    setLanguage("it");
    setPokemonCounter(0);
    typeFunction(cardColor.filter((type) => pokemonType?.includes(type.typ)),typeLanguage , setTypeLanguage, language);
  }}
>
  Italian
</button>

        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
