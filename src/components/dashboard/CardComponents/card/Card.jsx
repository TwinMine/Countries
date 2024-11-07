import { useContext, useEffect, useRef, useState } from "react";
import { cardColor } from "../../../data/cardColor";
import defaultPic from "/not-implented.jpg";
import "./card.css";
import Translater from "../../../translater/Translater";
import { firstDataFetch } from "../../../function/firstDataFetch";
import Cries from "../../../dashboard/CardComponents/cries/Cries";
import CardText from "./cardText/CardText";
import PokemonData from "../../../../context/PokemonData";
import PokemonPicture from "../../../../context/PokemonPicture";
import SecondDataFetch from "../../../../context/SecondDataFetch";
import PokemonCounter from "../../../../context/PokemonCounter";
import LastPokemon from "../../../../context/LastPokemon";
import { typeFunction } from "../../../function/TypeFunction";
import Type from "../type/Type";
import CardPictures from "../card/cardPictures/CardPictures";
import SearchedPokemon from "../../../../context/SearchedPokemon";
import Cooldown from "../../../../context/Cooldown";


const url = import.meta.env.VITE_URL;

const Card = () => {
  const { pokemonData, setPokemonData } = useContext(PokemonData);
  const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
  const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
  const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);
  const { lastPokemon, setLastPokemon } = useContext(LastPokemon);
  const [language, setLanguage] = useState("en");
  const {searchedPokemon, setSearchedPokemon} = useContext(SearchedPokemon);
  const {cooldown, setCooldown} = useContext(Cooldown);
  const [pokemonSound, setPokemonSound] = useState(pokemonData?.cries);
  const [volume, setVolume] = useState(0.2);

  const legacyAudioRef = useRef(null);
  const latestAudioRef = useRef(null);

  useEffect(() => {
    if (pokemonData?.cries) {
      setPokemonSound(pokemonData.cries);
    }
  }, [pokemonData]);

  const handlePlayLegacySound = () => {
    if (legacyAudioRef.current) {
      setTimeout(() => {
        legacyAudioRef.current.volume = volume;
        legacyAudioRef.current.play();
      }, 500);
    }
  };

  const handlePlayLatestSound = () => {
    if (latestAudioRef.current) {
      setTimeout(() => {
        latestAudioRef.current.volume = volume;
        latestAudioRef.current.play();
      }, 500);
    }
  };

  if (cooldown) {
    setTimeout(() => {
      setCooldown(false);
    }, 5000);
  }

  const cardBackground =
    pokemonData?.types?.[0]?.type &&
    cardColor.find((item) => item.typ === pokemonData.types[0].type.name)
      ?.backgroundColor;

  const pokemonType = pokemonData?.types?.map((item) => item.type.name);
  const [allTypes, setAllTypes] = useState(
    cardColor.filter((type) => pokemonType?.includes(type.typ))
  );
  const [typeLanguage, setTypeLanguage] = useState([]);
  const pokemonId = pokemonData.id;
  const weight = pokemonData.weight / 10;
  const height = pokemonData.height / 10;
  const baseExperience = pokemonData.base_experience;

  useEffect(() => {
    typeFunction(
      cardColor.filter((type) => pokemonType?.includes(type.typ)),
      typeLanguage,
      setTypeLanguage,
      language
    );
  }, [language]);

  useEffect(() => {
    setTypeLanguage(
      cardColor.filter((type) => pokemonType?.includes(type.typ))
    );
    setLanguage("en");
  }, [pokemonData]);

  const languageText = [
    {
      name:
        language === "en"
          ? [{ name: pokemonData.name }]
          : secondDataFetch?.names?.filter(
              (item) => item.language.name === language
            ),
    },
    {
      animal: secondDataFetch?.genera?.filter(
        (item) => item.language.name === language
      ),
    },
    {
      text: secondDataFetch?.flavor_text_entries?.filter(
        (item) => item.language.name === language
      ),
    },
    {
      type: typeLanguage,
    },
  ];

  const pokemonName = languageText[0]?.name?.[0]?.name || "Unknown Pokemon";
  const pokemonAnimal = languageText[1]?.animal?.[0]?.genus || "Unknown Animal";
  const pokemonText =
    languageText[2]?.text?.map((item) => item.flavor_text) || [];

  const handlePokemonChange = async (newId) => {
    setSearchedPokemon(newId);
    await firstDataFetch(
      newId,
      url,
      setPokemonCounter,
      setPokemonData,
      setPokemonPicture,
      setSearchedPokemon,
      setSecondDataFetch,
      lastPokemon,
      setLastPokemon,
      pokemonData
    );
    setCooldown(true)
  };

  return (
    <>
      {pokemonData && pokemonData.name ? (
        <div>
          <div>
            <Translater
              setLanguage={setLanguage}
              setPokemonCounter={setPokemonCounter}
              typeFunction={typeFunction}
              cardColor={cardColor}
              pokemonType={pokemonType}
              typeLanguage={typeLanguage}
              setTypeLanguage={setTypeLanguage}
              language={language}
              allTypes={allTypes}
              pokemonData={pokemonData}
            />
          </div>
          <div
            style={{
              backgroundColor: cardBackground,
            }}
            className="pokemon-card"
          >
            <div className="header">
              <h2 className="pokemon-name">{pokemonName.split("-")[0]}</h2>
              <p>Order: {pokemonId}</p>
            </div>

            <CardPictures
              pokemonData={pokemonData}
              pokemonPicture={pokemonPicture}
              defaultPic={defaultPic}
            />

            <Type
              cooldown={cooldown}
              pokemonData={pokemonData}
              handlePokemonChange={handlePokemonChange}
              setCooldown={setCooldown}
              languageText={languageText}
            />

            <div className="card-informations">
              <p>Full Name: {pokemonName}</p>
              <p>Animal: {pokemonAnimal}</p>
              <p>Weight: {weight} kg</p>
              <p>Height: {height} m</p>
              <p>Base experience: {baseExperience}</p>
            </div>

            <Cries
              pokemonSound={pokemonSound}
              legacyAudioRef={legacyAudioRef}
              handlePlayLatestSound={handlePlayLatestSound}
              latestAudioRef={latestAudioRef}
              handlePlayLegacySound={handlePlayLegacySound}
              volume={volume}
              setVolume={setVolume}
              pokemonName={pokemonName}
            />

            <CardText
              pokemonText={pokemonText}
              pokemonCounter={pokemonCounter}
              setPokemonCounter={setPokemonCounter}
            />

            <div className="card-footer">
              <p className="card-footer-p">
                Designed by MSR, {new Date().getFullYear()}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Card;
