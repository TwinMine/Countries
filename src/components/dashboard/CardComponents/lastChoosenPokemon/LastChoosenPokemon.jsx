import { useContext, useState } from "react";
import "../lastChoosenPokemon/lastChoosenPokemon.css";
import PokemonCounter from "../../../../context/PokemonCounter";
import SecondDataFetch from "../../../../context/SecondDataFetch";
import PokemonPicture from "../../../../context/PokemonPicture";
import PokemonData from "../../../../context/PokemonData";
import LastPokemon from "../../../../context/LastPokemon";
import { firstDataFetch } from "../../../function/firstDataFetch";

const url = import.meta.env.VITE_URL;

const LastChoosenPokemon = () => {

    const { pokemonData, setPokemonData } = useContext(PokemonData);
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
  const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [cooldown, setCooldown] = useState(true);


    const handlePokemonChange = async (newId) => {
        setSearchedPokemon(newId);
        await firstDataFetch(
          newId,
          url,
          setPokemonCounter,
          setPokemonData,
          setPokemonPicture,
          setSearchedPokemon,
          setSecondDataFetch,
          lastPokemon,
          setLastPokemon,
          pokemonData
        );
      };

      if (cooldown) {
        setTimeout(() => {
          setCooldown(false);
        }, 5000);
      }

    const {lastPokemon, setLastPokemon} = useContext(LastPokemon);
    return(
        <div className="last-pokemon">
            <h2>Your last picked Pokemon:</h2>
            <div>
            {lastPokemon.length >= 1 ? lastPokemon.map((item, key) => (
                <button disabled={cooldown || item === pokemonData.species.name || item === pokemonData.name} style={{background: cooldown || item === pokemonData.species.name || item === pokemonData.name ? "gray" : ""}} onClick={() => handlePokemonChange(item)} key={key}>{item.slice(0,1).toUpperCase() + item.slice(1)}
                </button>
            )) : <p>No recent pokemon found</p>}</div>
        </div>
    )
}


export default LastChoosenPokemon;