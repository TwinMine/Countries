import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const GenerationI = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic = Object.keys(pokemonData.sprites.versions)[0].slice(0,1).toUpperCase() + Object.keys(pokemonData.sprites.versions)[0].slice(1, Object.keys(pokemonData.sprites.versions)[0].length -1).toLowerCase().replace(/[_-]/g, ' ') + Object.keys(pokemonData.sprites.versions)[0].replace(/[_-]/g, ' ').split(" ")[1].toUpperCase()

  const formatTopic = (str) => {
    return str
      .replace(/[_-]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const smallTopic = Object.keys(
    pokemonData.sprites.versions["generation-i"]
  ).map(formatTopic);

    return (
        <>
        <h2>{topic}</h2>
        <div className="red-blue">
          <h3>{smallTopic[0]}</h3>
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
            <h3>{smallTopic[1]}</h3>
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