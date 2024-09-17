import { useContext } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import {cardColor} from "../data/cardColor"
import "./card.css"

const Card = () => {
    const {pokemonData, setPokemonData} = useContext(PokemonData)
    const {pokemonPicture, setPokemonPicture} = useContext(PokemonPicture)
    const pokemonName = pokemonData.name
    const cardBackground = pokemonData?.types?.[0]?.type &&
              cardColor.find((item) => item.typ === pokemonData.types[0].type.name)
                ?.backgroundColor

    const pokemonType = pokemonData?.types?.map((item) => item.type.name)
    const allTypes = cardColor.filter((type) => pokemonType?.includes(type.typ))
    
    return(
        <>
        {pokemonData && pokemonData.name ? <div style={{
            backgroundColor: cardBackground
              ,
          }} className="pokemon-card">
       <p>{pokemonName}</p>
       <img src={pokemonPicture && pokemonPicture.front === null || pokemonPicture.front === undefined ? "public/default-pic.png" : pokemonPicture.front} alt={pokemonData.name} />
       <img src={pokemonPicture && pokemonPicture.back === null || pokemonPicture.back === undefined ? "public/default-pic.png" : pokemonPicture.back} alt={pokemonData.name} />
       <div className="card-informations">
        {allTypes.map((item) => (
            <div className="type" key={item.id}>
                <p>{item.typ}</p>
                <img src={item.symbol} alt={item.typ} />
            </div>
        ))}
       </div>
        </div> : <></>}
        
       
        </>
    )
}

export default Card;