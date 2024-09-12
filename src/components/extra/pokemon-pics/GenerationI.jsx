import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const GenerationI = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
    return (
        <>
        <h2>Generation I</h2>
        <div className="red-blue">
          <h3>Red-blue</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["red-blue"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-i"]["red-blue"]
                    .back_default,
                })
              }
            >
              Normal
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["red-blue"]
                      .front_gray,
                  back: pokemonData.sprites.versions["generation-i"]["red-blue"]
                    .back_gray,
                })
              }
            >
              Gray
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["red-blue"]
                      .front_transparent,
                  back: pokemonData.sprites.versions["generation-i"]["red-blue"]
                    .back_transparent,
                })
              }
            >
              Transparent
            </button>
          </div>

          <div className="yellow">
            <h3>Yellow</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["yellow"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-i"]["yellow"]
                    .back_default,
                })
              }
            >
              Normal
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["yellow"]
                      .front_gray,
                  back: pokemonData.sprites.versions["generation-i"]["yellow"]
                    .back_gray,
                })
              }
            >
              Gray
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-i"]["yellow"]
                      .front_transparent,
                  back: pokemonData.sprites.versions["generation-i"]["yellow"]
                    .back_transparent,
                })
              }
            >
              Transparent
            </button>
          </div>
        
        </>
    )
}

export default GenerationI