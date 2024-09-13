import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationIII = () => {
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { pokemonData, setPokemonData } = useContext(PokemonData);

    const topic = Object.keys(pokemonData.sprites.versions)[2].slice(0,1).toUpperCase() + Object.keys(pokemonData.sprites.versions)[2].slice(1, Object.keys(pokemonData.sprites.versions)[2].length -3).toLowerCase().replace(/[_-]/g, ' ') + Object.keys(pokemonData.sprites.versions)[2].replace(/[_-]/g, ' ').split(" ")[1].toUpperCase()

    const formatTopic = (str) => {
      return str
        .replace(/[_-]/g, " ")
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    };
  
    const smallTopic = Object.keys(
      pokemonData.sprites.versions["generation-iii"]
    ).map(formatTopic);

    return(
        <>
        <h2>{topic}</h2>
         <div className="emerald">
          <h3>{smallTopic[0]}</h3>
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
          <h3>{smallTopic[1]}</h3>
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
          <h3>{smallTopic[2]}</h3>
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