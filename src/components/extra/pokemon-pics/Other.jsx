import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const Other = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  return (
    <>
      <div className="dream-world">
        <h3>Dream World</h3>
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
        <h3>Home</h3>
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
        <h3>Official-Artwork</h3>
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
        <h3>Showdown</h3>
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
