import { useEffect } from "react";
import "./translater.css";

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
      <h2>Different Languages</h2>
      <div>
        <button
        style={{background: language === "en" ? "gray" : ""}}
        disabled={language === "en"}
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
        style={{background: language === "es" ? "gray" : ""}}
        disabled={language === "es"}
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
        style={{background: language === "de" ? "gray" : ""}}
        disabled={language === "de"}
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
        style={{background: language === "ja" ? "gray" : ""}}
        disabled={language === "ja"}
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
        style={{background: language === "it" ? "gray" : ""}}
        disabled={language === "it"}
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
        style={{background: language === "fr" ? "gray" : ""}}
        disabled={language === "fr"}
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
    </div>
  );
};

export default Translater;
