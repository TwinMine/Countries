import HoverText from "../../function/HoverText";

const Type = ({cooldown, pokemonData, handlePokemonChange, setCooldown, languageText}) => {
    return(
        <>
        <div className="type-container">
              <p>Type:</p>
              <div className="type-div">
                <div className="swap-pokemon-button-container">
                  <HoverText text={"Previos"} />
                  <button
                    style={{
                      background:
                        cooldown ||
                        pokemonData.id <= 1 ||
                        pokemonData.id >= 1026
                          ? "gray"
                          : "",
                    }}
                    disabled={
                      cooldown || pokemonData.id <= 1 || pokemonData.id >= 1025
                    }
                    className="swap-pokemon-button"
                    onClick={() => {
                      handlePokemonChange(pokemonData.id - 1),
                        setCooldown(true);
                    }}
                  >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                  </button>
                </div>

                {languageText[3].type.map((item) => (
                  <div className="type" key={item.id}>
                    <p>
                      {item.typ[0].toUpperCase() +
                        item.typ.slice(1).toLowerCase()}
                    </p>
                    <img src={item.symbol} alt={item.typ} />
                  </div>
                ))}

                <div className="swap-pokemon-button-container">
                  <HoverText text={"Next"} />
                  <button
                    style={{
                      background:
                        cooldown || pokemonData.id >= 1025 ? "gray" : "",
                    }}
                    disabled={cooldown || pokemonData.id >= 1025}
                    className="swap-pokemon-button"
                    onClick={() => {
                      handlePokemonChange(pokemonData.id + 1),
                        setCooldown(true);
                    }}
                  >
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
        </>
    )
}

export default Type;