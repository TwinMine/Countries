import { useState, useEffect, useContext } from "react";
import "./pokemonComponent.css";
import defaultPic from "/not-implented.jpg";
import { useNavigate } from "react-router-dom";
import SearchedPokemon from "../../context/SearchedPokemon";

const PokemonComponent = () => {
  const navigate = useNavigate()
  const {searchedPokemon, setSearchedPokemon} = useContext(SearchedPokemon)
  const [randomPokemon, setRandomPokemon] = useState([]);
  const [count, setCount] = useState(0);
  const url = import.meta.env.VITE_URL;

  const randomNumberFunction = async (number) => {
    try {
      const response = await fetch(`${url}/${number}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.ok) {
        setRandomPokemon((prevPokemon) => [...prevPokemon, data]);
      } else {
        console.log(data.response);
        alert("Pokemon not found!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Pokemon not found!");
    }
  };

  useEffect(() => {
    if (count < 2) {
      const randomNumber = Math.ceil(Math.random() * 1020);
      randomNumberFunction(randomNumber);
      setCount(count + 1);
    }
  }, [count]);

  return (
    <div className="example-pokemon">
      {randomPokemon.length > 0 ? (
        randomPokemon.map((pokemon, index) => (
          <div className="random-cards" key={index} onClick={() => navigate("/search", setSearchedPokemon(pokemon.name))}>
            <div className="random-card-header">
            <h2>{pokemon.name}</h2>
            <p>Order: {pokemon.id}</p>    
            </div>
            <div className="random-pics">
            <img src={
                  (pokemon && pokemon.sprites.front_default === null) ||
                  pokemon.sprites.front_default === undefined
                    ? defaultPic
                    : pokemon.sprites.front_default
                } alt={pokemon.name} />
            <img src={
                  (pokemon && pokemon.sprites.back_default === null) ||
                  pokemon.sprites.back_default === undefined
                    ? defaultPic
                    : pokemon.sprites.back_default
                } alt={pokemon.name} />  
            </div>
            
          </div>
        ))
      ) : (
        <p>Loading Pokémon...</p>
      )}
    </div>
  );
};

export default PokemonComponent;
