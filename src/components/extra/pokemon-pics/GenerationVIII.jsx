import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationVIII = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation VIII</h2>
         <div className="icons">
          <h3>Icons</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-viii"]["icons"]
                  .back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>
          </div>




        </>
    )
}

export default GenerationVIII