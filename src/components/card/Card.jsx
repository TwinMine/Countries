import { useContext } from "react";
import PokemonData from "../../context/PokemonData";

const Card = () => {
    const {pokemonData, setPokemonData} = useContext(PokemonData)
    console.log(pokemonData);
    return(
        <>
       <p>{pokemonData.name}</p>
       <img src={pokemonData && pokemonData.sprites?.front_default === null ? "public/default-pic.png" : pokemonData.sprites?.front_default} alt={pokemonData.name} />
       <img src={pokemonData && pokemonData.sprites?.back_default === null ? "public/default-pic.png" : pokemonData.sprites?.back_default} alt={pokemonData.name} />
        </>
    )
}

export default Card;