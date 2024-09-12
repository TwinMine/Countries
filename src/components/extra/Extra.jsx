import { useContext } from "react";
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
  console.log(pokemonPicture);

  return (
    <>
      {pokemonData && pokemonData.name !== undefined ? (
        <div>
          <Normal />

          <Other />

          <GenerationI />

          <GenerationII />

          <GenerationIII />

          <GenerationIV />

          <GenerationV />

          <GenerationVI />

          <GenerationVII />

          <GenerationVIII />
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Extra;
