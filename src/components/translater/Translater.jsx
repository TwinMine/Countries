import { useEffect, useState } from "react";
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

  const [cooldown, setCooldown] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    if (!cooldown) {
      setLanguage(newLanguage);
      setPokemonCounter(0);
      setCooldown(true);

      typeFunction(
        cardColor.filter((type) => pokemonType?.includes(type.typ)),
        typeLanguage,
        setTypeLanguage,
        newLanguage
      );

      setTimeout(() => {
        setCooldown(false);
      }, 5000);
    }
  };

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
          style={{ background: language === "en" || cooldown ? "gray" : "" }}
          disabled={language === "en" || cooldown}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
        <button
          style={{ background: language === "es" || cooldown ? "gray" : "" }}
          disabled={language === "es" || cooldown}
          onClick={() => handleLanguageChange("es")}
        >
          Spanish
        </button>
        <button
          style={{ background: language === "de" || cooldown ? "gray" : "" }}
          disabled={language === "de" || cooldown}
          onClick={() => handleLanguageChange("de")}
        >
          German
        </button>
        <button
          style={{ background: language === "ja" || cooldown ? "gray" : "" }}
          disabled={language === "ja" || cooldown}
          onClick={() => handleLanguageChange("ja")}
        >
          Japanese
        </button>
        <button
          style={{ background: language === "it" || cooldown ? "gray" : "" }}
          disabled={language === "it" || cooldown}
          onClick={() => handleLanguageChange("it")}
        >
          Italian
        </button>
        <button
          style={{ background: language === "fr" || cooldown ? "gray" : "" }}
          disabled={language === "fr" || cooldown}
          onClick={() => handleLanguageChange("fr")}
        >
          French
        </button>
      </div>
    </div>
  );
};

export default Translater;
