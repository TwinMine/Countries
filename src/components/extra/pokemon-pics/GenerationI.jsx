import PokemonPicture from "../../../context/PokemonPicture";
import PokemonData from "../../../context/PokemonData";
import { useContext } from "react";

const GenerationI = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic =
    Object.keys(pokemonData.sprites.versions)[0].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[0]
      .slice(1, Object.keys(pokemonData.sprites.versions)[0].length - 1)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[0]
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
    pokemonData.sprites.versions["generation-i"]
  ).map(formatTopic);

  return (
    <>
      {(pokemonData &&
        pokemonData.sprites.versions["generation-i"]["red-blue"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-i"]["yellow"]
          .front_default) ? (
        <div>
          <h2>{topic}</h2>
          <div className="red-blue">
            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_default ? (
              <h3>{smallTopic[0]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["red-blue"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_default}

              style={{background: pokemonData.sprites.versions["generation-i"]["red-blue"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_default ? "gray" : ""}}

                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-i"]["red-blue"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-i"][
                      "red-blue"
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
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_gray ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["red-blue"].front_gray === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_gray}

              style={{background: pokemonData.sprites.versions["generation-i"]["red-blue"].front_gray === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_gray ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-i"]["red-blue"]
                        .front_gray,
                    back: pokemonData.sprites.versions["generation-i"][
                      "red-blue"
                    ].back_gray,
                  })
                }
              >
                Gray
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["red-blue"]
              .front_transparent ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["red-blue"].front_transparent === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_transparent}

              style={{background: pokemonData.sprites.versions["generation-i"]["red-blue"].front_transparent === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["red-blue"].back_transparent ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-i"]["red-blue"]
                        .front_transparent,
                    back: pokemonData.sprites.versions["generation-i"][
                      "red-blue"
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

          <div className="yellow">
            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["yellow"]
              .front_default ? (
              <h3>{smallTopic[1]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["yellow"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["yellow"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_default}

              style={{background: pokemonData.sprites.versions["generation-i"]["yellow"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_default ? "gray" : ""}}
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
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["yellow"]
              .front_gray ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["yellow"].front_gray === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_gray}

              style={{background: pokemonData.sprites.versions["generation-i"]["yellow"].front_gray === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_gray ? "gray" : ""}}
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
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-i"]["yellow"]
              .front_transparent ? (
              <button
              disabled={pokemonData.sprites.versions["generation-i"]["yellow"].front_transparent === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_transparent}

              style={{background: pokemonData.sprites.versions["generation-i"]["yellow"].front_transparent === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-i"]["yellow"].back_transparent ? "gray" : ""}}
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

export default GenerationI;
