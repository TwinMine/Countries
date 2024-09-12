import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationV = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation V</h2>
        <div className="black-white">
          <h3>Black-white</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"]
                  .back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>
          </div>



          <div className="black-white-animated">
          <h3>Black-white-animated</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .front_default,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .front_female,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-v"]["black-white"].animated
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-v"]["black-white"].animated
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

export default GenerationV