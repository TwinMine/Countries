import { useContext, useState } from "react";

import Normal from "./pokemon-pics/Normal";
import Other from "./pokemon-pics/Other";
import GenerationI from "./pokemon-pics/GenerationI";
import GenerationII from "./pokemon-pics/GenerationII";
import GenerationIII from "./pokemon-pics/GenerationIII";
import GenerationIV from "./pokemon-pics/GenerationIV";
import GenerationV from "./pokemon-pics/GenerationV";
import GenerationVI from "./pokemon-pics/GenerationVI";
import GenerationVII from "./pokemon-pics/GenerationVII";
import GenerationVIII from "./pokemon-pics/GenerationVIII";
import PokemonData from "../../../../context/PokemonData";
import PokemonPicture from "../../../../context/PokemonPicture";

const Extra = () => {
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const [selectData, setSelectData] = useState("Normal");

  return (
    <>
      {pokemonData && pokemonData.name !== undefined ? (
        <div>
          <select
            className="choose-options"
            onChange={(e) => setSelectData(e.target.value)}
            value={selectData}
          >
            {pokemonData && pokemonData.sprites.front_default ? (
              <option value="Normal">Normal</option>
            ) : (
              ""
            )}
            {(pokemonData &&
              pokemonData.sprites.other.dream_world.front_default) ||
            (pokemonData && pokemonData.sprites.other.home.front_default) ||
            (pokemonData &&
              pokemonData.sprites.other["official-artwork"].front_default) ||
            (pokemonData &&
              pokemonData.sprites.other.showdown.front_default) ? (
              <option value="Other">Other</option>
            ) : (
              ""
            )}
            {(pokemonData &&
              pokemonData.sprites.versions["generation-i"]["yellow"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-i"]["red-blue"]
                .front_default) ? (
              <option value="GenerationI">GenerationI</option>
            ) : (
              ""
            )}

            {(pokemonData &&
              pokemonData.sprites.versions["generation-ii"]["crystal"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-ii"]["gold"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-ii"]["silver"]
                .front_default) ? (
              <option value="GenerationII">GenerationII</option>
            ) : (
              ""
            )}

            {(pokemonData &&
              pokemonData.sprites.versions["generation-iii"]["emerald"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-iii"][
                "firered-leafgreen"
              ].front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-iii"]["ruby-sapphire"]
                .front_default) ? (
              <option value="GenerationIII">GenerationIII</option>
            ) : (
              ""
            )}

            {(pokemonData &&
              pokemonData.sprites.versions["generation-iv"]["diamond-pearl"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-iv"][
                "heartgold-soulsilver"
              ].front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-iv"]["platinum"]
                .front_default) ? (
              <option value="GenerationIV">GenerationIV</option>
            ) : (
              ""
            )}

            {pokemonData.sprites.versions["generation-v"]["black-white"]
              .front_default ? (
              <option value="GenerationV">GenerationV</option>
            ) : (
              ""
            )}
            {(pokemonData &&
              pokemonData.sprites.versions["generation-vi"][
                "omegaruby-alphasapphire"
              ].front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-vi"]["x-y"]
                .front_default) ? (
              <option value="GenerationVI">GenerationVI</option>
            ) : (
              ""
            )}
            {(pokemonData &&
              pokemonData.sprites.versions["generation-vii"]["icons"]
                .front_default) ||
            (pokemonData &&
              pokemonData.sprites.versions["generation-vii"][
                "ultra-sun-ultra-moon"
              ].front_default) ? (
              <option value="GenerationVII">GenerationVII</option>
            ) : (
              ""
            )}

            {pokemonData &&
            pokemonData.sprites.versions["generation-viii"]["icons"]
              .front_default ? (
              <option value="GenerationVIII">GenerationVIII</option>
            ) : (
              ""
            )}
          </select>

          {selectData === "Normal" ? <Normal /> : <></>}
          {selectData === "Other" ? <Other /> : <></>}
          {selectData === "GenerationI" ? <GenerationI /> : <></>}
          {selectData === "GenerationII" ? <GenerationII /> : <></>}
          {selectData === "GenerationIII" ? <GenerationIII /> : <></>}
          {selectData === "GenerationIV" ? <GenerationIV /> : <></>}
          {selectData === "GenerationV" ? <GenerationV /> : <></>}
          {selectData === "GenerationVI" ? <GenerationVI /> : <></>}
          {selectData === "GenerationVII" ? <GenerationVII /> : <></>}
          {selectData === "GenerationVIII" ? <GenerationVIII /> : <></>}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Extra;
