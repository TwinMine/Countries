import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const Normal = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
    return (
        <>
        
        <div className="normal">
          <h3>Normal</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.front_default,
                  back: pokemonData.sprites.back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.front_female,
                  back: pokemonData.sprites.back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.front_shiny,
                  back: pokemonData.sprites.back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.front_shiny_female,
                  back: pokemonData.sprites.back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>
          </div>
        
        </>
    )
}

export default Normal