import PokemonData from "../../../../../context/PokemonData";
import PokemonPicture from "../../../../../context/PokemonPicture";
import { useContext } from "react";

const Other = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const topic =
    Object.keys(pokemonData.sprites)[8].slice(0, 1).toUpperCase() +
    Object.keys(pokemonData.sprites)[8].slice(1).toLowerCase();
  const smallTopic = Object.keys(pokemonData.sprites.other).map(
    (item) =>
      item.slice(0, 1).toUpperCase() +
      item.slice(1).toLowerCase().replace(/[_-]/g, " ")
  );

  return (
    <>
      {(pokemonData && pokemonData.sprites.other.dream_world.front_default) ||
      (pokemonData &&
        pokemonData.sprites.other["official-artwork"].front_default) ||
      pokemonData.sprites.other.showdown.front_default ? (
        <div>
          <h2>{topic}</h2>
          <div className="dream-world">
            {pokemonData &&
            pokemonData.sprites.other.dream_world.front_default ? (
              <h3>{smallTopic[0]}</h3>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.other.dream_world.front_default ? (
              <button
                disabled={
                  pokemonData.sprites.other.dream_world.front_default ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.dream_world.back_default
                }
                style={{
                  background:
                    pokemonData.sprites.other.dream_world.front_default ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.dream_world.back_default
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.dream_world.front_default,
                    back: pokemonData.sprites.other.dream_world.back_default,
                  })
                }
              >
                Dream-World
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="home">
            {pokemonData && pokemonData.sprites.other.home.front_default ? (
              <h3>{smallTopic[1]}</h3>
            ) : (
              <></>
            )}

            {pokemonData && pokemonData.sprites.other.home.front_default ? (
              <button
                disabled={
                  pokemonData.sprites.other.home.front_default ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.home.back_default
                }
                style={{
                  background:
                    pokemonData.sprites.other.home.front_default ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.home.back_default
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.home.front_default,
                    back: pokemonData.sprites.other.home.back_default,
                  })
                }
              >
                Home
              </button>
            ) : (
              <></>
            )}

            {pokemonData && pokemonData.sprites.other.home.front_shiny ? (
              <button
                disabled={
                  pokemonData.sprites.other.home.front_shiny ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.home.back_shiny
                }
                style={{
                  background:
                    pokemonData.sprites.other.home.front_shiny ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.home.back_shiny
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.home.front_shiny,
                    back: pokemonData.sprites.other.home.back_shiny,
                  })
                }
              >
                Home-Shiny
              </button>
            ) : (
              <></>
            )}
          </div>

          <div className="official-artwork">
            {pokemonData.sprites.other["official-artwork"].front_default ? (
              <h3>{smallTopic[2]}</h3>
            ) : (
              <></>
            )}
            {pokemonData.sprites.other["official-artwork"].front_default ? (
              <button
                disabled={
                  pokemonData.sprites.other["official-artwork"]
                    .front_default === pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other["official-artwork"].back_default
                }
                style={{
                  background:
                    pokemonData.sprites.other["official-artwork"]
                      .front_default === pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other["official-artwork"].back_default
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.other["official-artwork"]
                        .front_default,
                    back: pokemonData.sprites.other["official-artwork"]
                      .back_default,
                  })
                }
              >
                Official-Artwork
              </button>
            ) : (
              <></>
            )}

            {pokemonData &&
            pokemonData.sprites.other["official-artwork"].front_shiny ? (
              <button
                disabled={
                  pokemonData.sprites.other["official-artwork"].front_shiny ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other["official-artwork"].back_shiny
                }
                style={{
                  background:
                    pokemonData.sprites.other["official-artwork"]
                      .front_shiny === pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other["official-artwork"].back_shiny
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.other["official-artwork"].front_shiny,
                    back: pokemonData.sprites.other["official-artwork"]
                      .back_shiny,
                  })
                }
              >
                Official-Artwork-Shiny
              </button>
            ) : (
              <></>
            )}
          </div>
          {pokemonData && pokemonData.sprites.other.showdown.front_default ? (
            <h3>{smallTopic[3]}</h3>
          ) : (
            <></>
          )}
          <div className="showdown">
            {pokemonData && pokemonData.sprites.other.showdown.front_default ? (
              <button
                disabled={
                  pokemonData.sprites.other.showdown.front_default ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.showdown.back_default
                }
                style={{
                  background:
                    pokemonData.sprites.other.showdown.front_default ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.showdown.back_default
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.showdown.front_default,
                    back: pokemonData.sprites.other.showdown.back_default,
                  })
                }
              >
                Male-Showdown
              </button>
            ) : (
              <></>
            )}
            {pokemonData && pokemonData.sprites.other.showdown.front_female ? (
              <button
                disabled={
                  pokemonData.sprites.other.showdown.front_female ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.showdown.back_female
                }
                style={{
                  background:
                    pokemonData.sprites.other.showdown.front_female ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.showdown.back_female
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.showdown.front_female,
                    back: pokemonData.sprites.other.showdown.back_female,
                  })
                }
              >
                Female-Showdown
              </button>
            ) : (
              <></>
            )}
            {pokemonData && pokemonData.sprites.other.showdown.front_shiny ? (
              <button
                disabled={
                  pokemonData.sprites.other.showdown.front_shiny ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.showdown.back_shiny
                }
                style={{
                  background:
                    pokemonData.sprites.other.showdown.front_shiny ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.showdown.back_shiny
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front: pokemonData.sprites.other.showdown.front_shiny,
                    back: pokemonData.sprites.other.showdown.back_shiny,
                  })
                }
              >
                Shiny-Male-Showdown
              </button>
            ) : (
              <></>
            )}
            {pokemonData &&
            pokemonData.sprites.other.showdown.front_shiny_female ? (
              <button
                disabled={
                  pokemonData.sprites.other.showdown.front_shiny_female ===
                    pokemonPicture.front &&
                  pokemonPicture.back ===
                    pokemonData.sprites.other.showdown.back_shiny_female
                }
                style={{
                  background:
                    pokemonData.sprites.other.showdown.front_shiny_female ===
                      pokemonPicture.front &&
                    pokemonPicture.back ===
                      pokemonData.sprites.other.showdown.back_shiny_female
                      ? "gray"
                      : "",
                }}
                onClick={() =>
                  setPokemonPicture({
                    front:
                      pokemonData.sprites.other.showdown.front_shiny_female,
                    back: pokemonData.sprites.other.showdown.back_shiny_female,
                  })
                }
              >
                Shiny-Female-Shodown
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

export default Other;
