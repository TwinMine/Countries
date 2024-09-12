import { useContext } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import "./card.css"

const Card = () => {
    const {pokemonData, setPokemonData} = useContext(PokemonData)
    const {pokemonPicture, setPokemonPicture} = useContext(PokemonPicture)
    console.log(pokemonData);
    return(
        <>
        <div className="pokemon-card">
       <p>{pokemonData.name}</p>
       <img src={pokemonPicture && pokemonPicture.front === null || pokemonPicture.front === undefined ? "public/default-pic.png" : pokemonPicture.front} alt={pokemonData.name} />
       <img src={pokemonPicture && pokemonPicture.back === null || pokemonPicture.back === undefined ? "public/default-pic.png" : pokemonPicture.back} alt={pokemonData.name} />     
        </div>
       
        </>
    )
}

export default Card;