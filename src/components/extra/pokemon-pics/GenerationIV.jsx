import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationIV = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);

    const topic = Object.keys(pokemonData.sprites.versions)[3].slice(0,1).toUpperCase() + Object.keys(pokemonData.sprites.versions)[3].slice(1, Object.keys(pokemonData.sprites.versions)[3].length -2).toLowerCase().replace(/[_-]/g, ' ') + Object.keys(pokemonData.sprites.versions)[3].replace(/[_-]/g, ' ').split(" ")[1].toUpperCase()

    const formatTopic = (str) => {
      return str
        .replace(/[_-]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    };
  
    const smallTopic = Object.keys(
      pokemonData.sprites.versions["generation-iv"]
    ).map(formatTopic);
    return(
        <>
        <h2>{topic}</h2>
         <div className="diamond-pearl">
          <h3>{smallTopic[0]}</h3>
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
            <h3>{smallTopic[1]}</h3>
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
            <h3>{smallTopic[2]}</h3>

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