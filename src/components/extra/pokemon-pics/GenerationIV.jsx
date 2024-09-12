import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationIV = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    return(
        <>
        <h2>Generation IV</h2>
         <div className="diamond-pearl">
          <h3>Diamond-pearl</h3>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                  .back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>
          </div>






          <div className="heartgold-soulsilver">
            <h3>Heartgold-soulsilver</h3>
          <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["dheartgold-soulsilver"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
                  .back_shiny_female,
                })
              }
            >
              Shiny-Female
            </button>

          </div>

          <div className="platinum">
            <h3>Platinum</h3>

          <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .front_default,
                  back: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .back_default,
                })
              }
            >
              Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .front_female,
                  back: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .back_female,
                })
              }
            >
              Female
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .front_shiny,
                  back: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
            <button
              onClick={() =>
                setPokemonPicture({
                  front: pokemonData.sprites.versions["generation-iv"]["platinum"]
                  .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-iv"]["platinum"]
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

export default GenerationIV