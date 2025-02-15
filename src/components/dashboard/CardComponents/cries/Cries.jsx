import { useState } from "react";

const Cries = ({
  pokemonSound,
  legacyAudioRef,
  handlePlayLatestSound,
  latestAudioRef,
  handlePlayLegacySound,
  volume,
  setVolume,
  pokemonName
}) => {
  const [cooldown, setCooldown] = useState(false);

  if (cooldown) {
    setTimeout(() => {
      setCooldown(false);
    }, 1000);
  }

  return (
    <>
      <div
        className="pokemon-cries"
        style={{
          justifyContent:
            pokemonSound?.legacy === null || pokemonSound?.latest === null
              ? "center"
              : "",
        }}
      >
        <h4>{pokemonName[0].toUpperCase() + pokemonName.slice(1)}'s Sound</h4>
        <div>
        {pokemonSound?.legacy && (
          <div>
            
            <audio key={pokemonSound.legacy} ref={legacyAudioRef}>
              <source src={pokemonSound.legacy} type="audio/ogg" />
            </audio>
            <button
              style={{ background: cooldown ? "gray" : "" }}
              disabled={cooldown}
              onClick={() => {
                handlePlayLegacySound(), setCooldown(true);
              }}
            >
              <i className="fa-solid fa-music"></i>
            </button>
          </div>
        )}

        {pokemonSound?.latest && (
          <div>
            <audio key={pokemonSound.latest} ref={latestAudioRef}>
              <source src={pokemonSound.latest} type="audio/ogg" />
            </audio>
            <button
              style={{ background: cooldown ? "gray" : "" }}
              disabled={cooldown}
              onClick={() => {
                handlePlayLatestSound(), setCooldown(true);
              }}
            >
             <i className="fa-solid fa-music"></i>
            </button>
          </div>
        )}</div>
      </div>
      <div className="cries-volume">
        <label htmlFor="volume">Volume: {Math.round(volume * 100)}%</label>
        <input
          className="volume-slider"
          style={{ background: "transparent", touchAction: "none" }}
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default Cries;
