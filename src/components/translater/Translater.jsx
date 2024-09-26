import { useEffect } from "react";
import "./translater.css"

const Translater = ({
  setLanguage,
  setPokemonCounter,
  typeFunction,
  cardColor,
  pokemonType,
  typeLanguage,
  setTypeLanguage,
  language,
  allTypes,
  pokemonData,
}) => {
  useEffect(() => {
    typeFunction(
      cardColor.filter((type) => pokemonType?.includes(type.typ)),
      typeLanguage,
      setTypeLanguage,
      language
    );
  }, [language]);

  useEffect(() => {
    setTypeLanguage(allTypes);
  }, [allTypes]);

  useEffect(() => {
    setTypeLanguage(
      cardColor.filter((type) => pokemonType?.includes(type.typ))
    );
  }, [pokemonData]);
  return (
    <div className="language-buttons">
      <button
        onClick={() => {
          setLanguage("en");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          setLanguage("es");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        Spanish
      </button>
      <button
        onClick={() => {
          setLanguage("de");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        German
      </button>
      <button
        onClick={() => {
          setLanguage("ja");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        Japanese
      </button>
      <button
        onClick={() => {
          setLanguage("it");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        Italian
      </button>
      <button
        onClick={() => {
          setLanguage("fr");
          setPokemonCounter(0);
          typeFunction(
            cardColor.filter((type) => pokemonType?.includes(type.typ)),
            typeLanguage,
            setTypeLanguage,
            language
          );
        }}
      >
        French
      </button>
    </div>
  );
};

export default Translater;
