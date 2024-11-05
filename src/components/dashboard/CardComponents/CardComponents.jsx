import Search from "./search/Search";
import Card from "./card/Card";
import Extra from "./extra/Extra";
import LastChoosenPokemon from "./lastChoosenPokemon/LastChoosenPokemon";

const CardComponents = () => {
  return (
    <>
      <Search />
      <LastChoosenPokemon />
      <Card />
      <Extra />
    </>
  );
};

export default CardComponents;
