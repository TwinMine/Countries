import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationV = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);

    const topic = Object.keys(pokemonData.sprites.versions)[4].slice(0,1).toUpperCase() + Object.keys(pokemonData.sprites.versions)[4].slice(1, Object.keys(pokemonData.sprites.versions)[4].length -1).toLowerCase().replace(/[_-]/g, ' ') + Object.keys(pokemonData.sprites.versions)[4].replace(/[_-]/g, ' ').split(" ")[1].toUpperCase()

    const formatTopic = (str) => {
      return str
        .replace(/[_-]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    };
  
    const smallTopic = Object.keys(
      pokemonData.sprites.versions["generation-v"]
    ).map(formatTopic);


    const animatedTopic = (Object.keys(pokemonData.sprites.versions["generation-v"]["black-white"]).map((item) => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase().replace(/[_-]/g, ' ')))[0]
  
    return(
        <>
        <h2>{topic}</h2>
        <div className="black-white">
          <h3>{smallTopic[0]}</h3>
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
          <h3>{animatedTopic}</h3>
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