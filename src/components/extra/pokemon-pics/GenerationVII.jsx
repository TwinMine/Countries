import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationVII = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation VII</h2>
         <div className="icons">
          <h3>Icons</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-vii"]["icons"]
                  .back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>
          </div>






          <div className="ultra-sun-ultra-moon">
            <h3>ultra-sun-ultra-moon</h3>
          <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"]
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

export default GenerationVII