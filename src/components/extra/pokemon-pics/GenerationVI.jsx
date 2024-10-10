import { useContext } from "react";
import PokemonData from "../../../context/PokemonData";
import PokemonPicture from "../../../context/PokemonPicture";

const GenerationVI = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);

  const topic =
    Object.keys(pokemonData.sprites.versions)[5].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[5]
      .slice(1, Object.keys(pokemonData.sprites.versions)[5].length - 2)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[5]
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
    pokemonData.sprites.versions["generation-vi"]
  ).map(formatTopic);

  return (
    <>
      {(pokemonData &&
        pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
          .front_default) ||
      (pokemonData &&
        pokemonData.sprites.versions["generation-vi"]["x-y"].front_default) ? (
        <h2>{topic}</h2>
      ) : (
        <></>
      )}

      {pokemonData &&
      pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"]
        .front_default ? (
        <div className="omegaruby-alphasapphire">
          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"][
            "omegaruby-alphasapphire"
          ].front_default ? (
            <h3>{smallTopic[0]}</h3>
          ) : (
            <></>
          )}
          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"][
            "omegaruby-alphasapphire"
          ].front_default ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_default}

            style={{background: pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_default ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"][
                      "omegaruby-alphasapphire"
                    ].front_default,
                  back: pokemonData.sprites.versions["generation-vi"][
                    "omegaruby-alphasapphire"
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
          pokemonData.sprites.versions["generation-vi"][
            "omegaruby-alphasapphire"
          ].front_female ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_female=== pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_female}

            style={{background: pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_female ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"][
                      "omegaruby-alphasapphire"
                    ].front_female,
                  back: pokemonData.sprites.versions["generation-vi"][
                    "omegaruby-alphasapphire"
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
          pokemonData.sprites.versions["generation-vi"][
            "omegaruby-alphasapphire"
          ].front_shiny ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny}

            style={{background: pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"][
                      "omegaruby-alphasapphire"
                    ].front_shiny,
                  back: pokemonData.sprites.versions["generation-vi"][
                    "omegaruby-alphasapphire"
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
          pokemonData.sprites.versions["generation-vi"][
            "omegaruby-alphasapphire"
          ].front_shiny_female ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny_female}

            style={{background: pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["omegaruby-alphasapphire"].back_shiny_female ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"][
                      "omegaruby-alphasapphire"
                    ].front_shiny_female,
                  back: pokemonData.sprites.versions["generation-vi"][
                    "omegaruby-alphasapphire"
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
      ) : (
        <></>
      )}

      {pokemonData &&
      pokemonData.sprites.versions["generation-vi"]["x-y"].front_default ? (
        <div className="x-y">
          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"]["x-y"].front_default ? (
            <h3>{smallTopic[1]}</h3>
          ) : (
            <></>
          )}
          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"]["x-y"].front_default ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["x-y"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_default}

            style={{background: pokemonData.sprites.versions["generation-vi"]["x-y"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_default ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"]["x-y"]
                      .front_default,
                  back: pokemonData.sprites.versions["generation-vi"]["x-y"]
                    .back_default,
                })
              }
            >
              Male
            </button>
          ) : (
            <></>
          )}

          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"]["x-y"].front_female ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["x-y"].front_female=== pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_female}

            style={{background: pokemonData.sprites.versions["generation-vi"]["x-y"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_female ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"]["x-y"]
                      .front_female,
                  back: pokemonData.sprites.versions["generation-vi"]["x-y"]
                    .back_female,
                })
              }
            >
              Female
            </button>
          ) : (
            <></>
          )}

          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_shiny}

            style={{background: pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_shiny ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"]["x-y"]
                      .front_shiny,
                  back: pokemonData.sprites.versions["generation-vi"]["x-y"]
                    .back_shiny,
                })
              }
            >
              Shiny-Male
            </button>
          ) : (
            <></>
          )}

          {pokemonData &&
          pokemonData.sprites.versions["generation-vi"]["x-y"]
            .front_shiny_female ? (
            <button
            disabled={pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_shiny_female}

            style={{background: pokemonData.sprites.versions["generation-vi"]["x-y"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-vi"]["x-y"].back_shiny_female ? "gray" : ""}}
              onClick={() =>
                setPokemonPicture({
                  front:
                    pokemonData.sprites.versions["generation-vi"]["x-y"]
                      .front_shiny_female,
                  back: pokemonData.sprites.versions["generation-vi"]["x-y"]
                    .back_shiny_female,
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
};

export default GenerationVI;
