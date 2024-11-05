import { useContext } from "react";
import PokemonData from "../../../../../context/PokemonData";
import PokemonPicture from "../../../../../context/PokemonPicture";

const GenerationIII = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic =
    Object.keys(pokemonData.sprites.versions)[2].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[2]
      .slice(1, Object.keys(pokemonData.sprites.versions)[2].length - 3)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[2]
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
    pokemonData.sprites.versions["generation-iii"]
  ).map(formatTopic);

  return (
    <>
      {(pokemonData &&
        pokemonData.sprites.versions["generation-iii"]["emerald"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
          .front_default) ? (
        <div>
          <h2>{topic}</h2>
          <div className="emerald">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["emerald"]
              .front_default ? (
              <h3>{smallTopic[0]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["emerald"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iii"]["emerald"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["emerald"].back_default}

              style={{background: pokemonData.sprites.versions["generation-iii"]["emerald"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["emerald"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"]["emerald"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "emerald"
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
            pokemonData.sprites.versions["generation-iii"]["emerald"]
              .front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iii"]["emerald"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["emerald"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-iii"]["emerald"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["emerald"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"]["emerald"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "emerald"
                    ].back_shiny,
                  })
                }
              >
                Shiny
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="firered-leafgreen">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
              .front_default ? (
              <h3>{smallTopic[1]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].back_default}

              style={{background: pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"][
                        "firered-leafgreen"
                      ].front_default,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "firered-leafgreen"
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
            pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"]
              .front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iii"]["firered-leafgreen"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"][
                        "firered-leafgreen"
                      ].front_shiny,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "firered-leafgreen"
                    ].back_shiny,
                  })
                }
              >
                Shiny
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="ruby-sapphire">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
              .front_default ? (
              <h3>{smallTopic[2]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
              .front_default ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"][
                        "ruby-sapphire"
                      ].front_default,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "ruby-sapphire"
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
            pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
              .front_shiny ? (
              <button
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iii"][
                        "ruby-sapphire"
                      ].front_shiny,
                    back: pokemonData.sprites.versions["generation-iii"][
                      "ruby-sapphire"
                    ].back_shiny,
                  })
                }
              >
                Shiny
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

export default GenerationIII;
