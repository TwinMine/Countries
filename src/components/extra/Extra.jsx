import { useContext, useState } from "react";
import PokemonPicture from "../../context/PokemonPicture";
import PokemonData from "../../context/PokemonData";
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
            <option value="Normal">Normal</option>
            <option value="Other">Other</option>
            <option value="GenerationI">GenerationI</option>
            <option value="GenerationII">GenerationII</option>
            <option value="GenerationIII">GenerationIII</option>
            <option value="GenerationIV">GenerationIV</option>
            <option value="GenerationV">GenerationV</option>
            <option value="GenerationVI">GenerationVI</option>
            <option value="GenerationVII">GenerationVII</option>
            <option value="GenerationVIII">GenerationVIII</option>
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
