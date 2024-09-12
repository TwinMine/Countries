import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationII = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation II</h2>
         <div className="crystal">
          <h3>Crystal</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["crystal"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-ii"]["crystal"]
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
                    pokemonData.sprites.versions["generation-ii"]["crystal"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-ii"]["crystal"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["crystal"]
                      .front_transparent,
                  back: pokemonData.sprites.versions["generation-ii"]["crystal"]
                    .back_transparent,
                })
              }
            >
              Transparent
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["crystal"]
                      .front_shiny_transparent,
                  back: pokemonData.sprites.versions["generation-ii"]["crystal"]
                    .back_shiny_transparent,
                })
              }
            >
              Shiny-Transparent
            </button>
          </div>

          <div className="gold">
            <h3>Gold</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["gold"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-ii"]["gold"]
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
                    pokemonData.sprites.versions["generation-ii"]["gold"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-ii"]["gold"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["gold"]
                      .front_transparent,
                  back: pokemonData.sprites.versions["generation-ii"]["gold"]
                    .back_transparent,
                })
              }
            >
              Transparent
            </button>
          </div>

          <div className="silver">
            <h3>Silver</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["silver"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-ii"]["silver"]
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
                    pokemonData.sprites.versions["generation-ii"]["silver"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-ii"]["silver"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>

            <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-ii"]["silver"]
                      .front_transparent,
                  back: pokemonData.sprites.versions["generation-ii"]["silver"]
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

export default GenerationII