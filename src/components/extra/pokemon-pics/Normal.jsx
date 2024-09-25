import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const Normal = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
    return (
      <>
        {pokemonData && pokemonData.sprites.front_default ? (
          <div className="normal">
            <h2>Normal</h2>
            {pokemonData && pokemonData.sprites.front_default ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.front_default,
                    back: pokemonData.sprites.back_default,
                  })
                }
              >
                Male
              </button>
            ) : (
              <></>
            )}
            {pokemonData && pokemonData.sprites.front_female ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.front_female,
                    back: pokemonData.sprites.back_female,
                  })
                }
              >
                Female
              </button>
            ) : (
              <></>
            )}
            {pokemonData && pokemonData.sprites.front_shiny ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.front_shiny,
                    back: pokemonData.sprites.back_shiny,
                  })
                }
              >
                Shiny-Male
              </button>
            ) : (
              <></>
            )}
            {pokemonData && pokemonData.sprites.front_shiny_female ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.front_shiny_female,
                    back: pokemonData.sprites.back_shiny_female,
                  })
                }
              >
                Shiny-Female
              </button>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </>
    );
}

export default Normal