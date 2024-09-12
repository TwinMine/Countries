import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationIII = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation III</h2>
         <div className="emerald">
          <h3>Emerald</h3>
         <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-iii"]["emerald"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-iii"]["emerald"]
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
                    pokemonData.sprites.versions["generation-iii"]["emerald"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-iii"]["emerald"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>
         </div>

         <div className="firered-leafgreen">
          <h3>firered-leafgreen</h3>
         <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
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
                    pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>
         </div>


         <div className="ruby-sapphire">
          <h3>Ruby-Sapphire</h3>
         <button
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
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
                    pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
                    .back_shiny,
                })
              }
            >
              Shiny
            </button>
         </div>
        </>
    )
}

export default GenerationIII