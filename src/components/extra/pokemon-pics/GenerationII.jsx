import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationII = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic =
    Object.keys(pokemonData.sprites.versions)[1].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[1]
      .slice(1, Object.keys(pokemonData.sprites.versions)[1].length - 2)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[1]
      .replace(/[_-]/g, " ")
      .split(" ")[1]
      .toUpperCase();

  const formatTopic = (str) => {
    return str
      .replace(/[_-]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const smallTopic = Object.keys(
    pokemonData.sprites.versions["generation-ii"]
  ).map(formatTopic);

  return (
    <>
      {(pokemonData &&
        pokemonData.sprites.versions["generation-ii"]["crystal"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-ii"]["gold"].front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-ii"]["silver"]
          .front_default) ? (
        <div>
          <h2>{topic}</h2>
          <div className="crystal">
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["crystal"]
              .front_default ? (
              <h3>{smallTopic[0]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["crystal"]
              .front_default ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["crystal"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "crystal"
                    ].back_default,
                  })
                }
              >
                Normal
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["crystal"]
              .front_shiny ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["crystal"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "crystal"
                    ].back_shiny,
                  })
                }
              >
                Shiny
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["crystal"]
              .front_transparent ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["crystal"]
                        .front_transparent,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "crystal"
                    ].back_transparent,
                  })
                }
              >
                Transparent
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["crystal"]
              .front_shiny_transparent ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["crystal"]
                        .front_shiny_transparent,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "crystal"
                    ].back_shiny_transparent,
                  })
                }
              >
                Shiny-Transparent
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="gold">
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["gold"]
              .front_default ? (
              <h3>{smallTopic[1]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["gold"]
              .front_default ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["gold"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-ii"]["gold"]
                      .back_default,
                  })
                }
              >
                Normal
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["gold"]
              .front_shiny ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["gold"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-ii"]["gold"]
                      .back_shiny,
                  })
                }
              >
                Shiny
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["gold"]
              .front_transparent ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["gold"]
                        .front_transparent,
                    back: pokemonData.sprites.versions["generation-ii"]["gold"]
                      .back_transparent,
                  })
                }
              >
                Transparent
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="silver">
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["silver"]
              .front_default ? (
              <h3>{smallTopic[2]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["silver"]
              .front_default ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["silver"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "silver"
                    ].back_default,
                  })
                }
              >
                Normal
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["silver"]
              .front_shiny ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["silver"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "silver"
                    ].back_shiny,
                  })
                }
              >
                Shiny
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-ii"]["silver"]
              .front_transparent ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-ii"]["silver"]
                        .front_transparent,
                    back: pokemonData.sprites.versions["generation-ii"][
                      "silver"
                    ].back_transparent,
                  })
                }
              >
                Transparent
              </button>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default GenerationII;
