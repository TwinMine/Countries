import { useContext } from "react";
import PokemonData from "../../../../../context/PokemonData";
import PokemonPicture from "../../../../../context/PokemonPicture";

const GenerationVIII = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const topic =
    Object.keys(pokemonData.sprites.versions)[7].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites.versions)[7]
      .slice(1, Object.keys(pokemonData.sprites.versions)[7].length - 4)
      .toLowerCase()
      .replace(/[_-]/g, " ") +
    Object.keys(pokemonData.sprites.versions)[7]
      .replace(/[_-]/g, " ")
      .split(" ")[1]
      .toUpperCase();
  return (
    <>
      {pokemonData &&
      pokemonData.sprites.versions["generation-viii"]["icons"].front_default ? (
        <div>
          <h2>{topic}</h2>
          <div className="icons">
            {pokemonData &&
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_default ? (
              <h3>Icons</h3>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_default ? (
              <button
              disabled={pokemonData.sprites.versions["generation-viii"]["icons"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_default}

              style={{background: pokemonData.sprites.versions["generation-viii"]["icons"].front_default === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_default ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-viii"]["icons"]
                        .front_default,
                    back: pokemonData.sprites.versions["generation-viii"][
                      "icons"
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
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-viii"]["icons"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_female}

              style={{background: pokemonData.sprites.versions["generation-viii"]["icons"].front_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-viii"]["icons"]
                        .front_female,
                    back: pokemonData.sprites.versions["generation-viii"][
                      "icons"
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
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_shiny ? (
              <button
              disabled={pokemonData.sprites.versions["generation-viii"]["icons"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_shiny}

              style={{background: pokemonData.sprites.versions["generation-viii"]["icons"].front_shiny === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_shiny ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-viii"]["icons"]
                        .front_shiny,
                    back: pokemonData.sprites.versions["generation-viii"][
                      "icons"
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
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_shiny_female ? (
              <button
              disabled={pokemonData.sprites.versions["generation-viii"]["icons"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_shiny_female}

              style={{background: pokemonData.sprites.versions["generation-viii"]["icons"].front_shiny_female === pokemonPicture.front && pokemonPicture.back === pokemonData.sprites.versions["generation-viii"]["icons"].back_shiny_female ? "gray" : ""}}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.versions["generation-viii"]["icons"]
                        .front_shiny_female,
                    back: pokemonData.sprites.versions["generation-viii"][
                      "icons"
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

export default GenerationVIII;
