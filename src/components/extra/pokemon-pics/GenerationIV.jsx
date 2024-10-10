import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationIV = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic =
    Object.keys(pokemonData.sprites.versions)[3].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[3]
      .slice(1, Object.keys(pokemonData.sprites.versions)[3].length - 2)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[3]
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
    pokemonData.sprites.versions["generation-iv"]
  ).map(formatTopic);
  return (
    <>
      {(pokemonData &&
        pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-iv"]["platinum"]
          .front_default) ? (
        <div>
          <h2>{topic}</h2>
          <div className="diamond-pearl">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_default ? (
              <h3>{smallTopic[0]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_default}

              style={{background: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_default,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "diamond-pearl"
                    ].back_default,
                  })
                }
              >
                Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "diamond-pearl"
                    ].back_female,
                  })
                }
              >
                Female
              </button>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_shiny,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "diamond-pearl"
                    ].back_shiny,
                  })
                }
              >
                Shiny-Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
              .front_shiny_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny_female === pokemonPicture.front_shiny_female && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["diamond-pearl"].back_shiny_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "diamond-pearl"
                      ].front_shiny_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "diamond-pearl"
                    ].back_shiny_female,
                  })
                }
              >
                Shiny-Female
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="heartgold-soulsilver">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_default ? (
              <h3>{smallTopic[1]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_default}

              style={{background: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_default,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "heartgold-soulsilver"
                    ].back_default,
                  })
                }
              >
                Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "heartgold-soulsilver"
                    ].back_female,
                  })
                }
              >
                Female
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_shiny,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "heartgold-soulsilver"
                    ].back_shiny,
                  })
                }
              >
                Shiny-Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"][
              "heartgold-soulsilver"
            ].front_shiny_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny_female === pokemonPicture.front_shiny_female && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["heartgold-soulsilver"].back_shiny_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"][
                        "heartgold-soulsilver"
                      ].front_shiny_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "heartgold-soulsilver"
                    ].back_shiny_female,
                  })
                }
              >
                Shiny-Female
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="platinum">
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_default ? (
              <h3>{smallTopic[2]}</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["platinum"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_default}

              style={{background: pokemonData.sprites.versions["generation-iv"]["platinum"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"]["platinum"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "platinum"
                    ].back_default,
                  })
                }
              >
                Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["platinum"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["platinum"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"]["platinum"]
                        .front_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "platinum"
                    ].back_female,
                  })
                }
              >
                Female
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["platinum"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-iv"]["platinum"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"]["platinum"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "platinum"
                    ].back_shiny,
                  })
                }
              >
                Shiny-Male
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-iv"]["platinum"]
              .front_shiny_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-iv"]["platinum"].front_shiny_female === pokemonPicture.front_shiny_female && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_shiny_female}

              style={{background: pokemonData.sprites.versions["generation-iv"]["platinum"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-iv"]["platinum"].back_shiny_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-iv"]["platinum"]
                        .front_shiny_female,
                    back: pokemonData.sprites.versions["generation-iv"][
                      "platinum"
                    ].back_shiny_female,
                  })
                }
              >
                Shiny-Female
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

export default GenerationIV;
