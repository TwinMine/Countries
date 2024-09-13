import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const Other = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const topic = Object.keys(pokemonData.sprites)[8].slice(0,1).toUpperCase() + Object.keys(pokemonData.sprites)[8].slice(1).toLowerCase()
  const smallTopic = (Object.keys(pokemonData.sprites.other).map((item) => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase().replace(/[_-]/g, ' ')))
  console.log(smallTopic);
  
  return (
    <>
    <h2>{topic}</h2>
      <div className="dream-world">
        <h3>{smallTopic[0]}</h3>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.dream_world.front_default,
              back: pokemonData.sprites.other.dream_world.back_default,
            })
          }
        >
          Dream-World
        </button>
      </div>

      <div className="home">
        <h3>{smallTopic[1]}</h3>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.home.front_default,
              back: pokemonData.sprites.other.home.back_default,
            })
          }
        >
          Home
        </button>

        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.home.front_shiny,
              back: pokemonData.sprites.other.home.back_shiny,
            })
          }
        >
          Home-Shiny
        </button>
      </div>

      <div className="official-artwork">
        <h3>{smallTopic[2]}</h3>
        <button
          onClick={() =>
            setPokemonPicture({
              front:
                pokemonData.sprites.other["official-artwork"].front_default,
              back: pokemonData.sprites.other["official-artwork"].back_default,
            })
          }
        >
          Official-artwork
        </button>

        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other["official-artwork"].front_shiny,
              back: pokemonData.sprites.other["official-artwork"].back_shiny,
            })
          }
        >
          Official-artwork
        </button>
      </div>

      <div className="showdown">
        <h3>{smallTopic[3]}</h3>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.showdown.front_default,
              back: pokemonData.sprites.other.showdown.back_default,
            })
          }
        >
          Male-Showdown
        </button>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.showdown.front_female,
              back: pokemonData.sprites.other.showdown.back_female,
            })
          }
        >
          Female-Showdown
        </button>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.showdown.front_shiny,
              back: pokemonData.sprites.other.showdown.back_shiny,
            })
          }
        >
          Shiny-Male-Showdown
        </button>
        <button
          onClick={() =>
            setPokemonPicture({
              front: pokemonData.sprites.other.showdown.front_shiny_female,
              back: pokemonData.sprites.other.showdown.back_shiny_female,
            })
          }
        >
          Shiny-Female-Shodown
        </button>
      </div>
    </>
  );
};

export default Other;
