const CardText = ({pokemonText, pokemonCounter, setPokemonCounter}) => {
    return(
        <>
        <div className="card-text">
              {pokemonText.length > 0 ? (
                <div className="text-button">
                  <button
                    style={{ background: pokemonCounter === 0 ? "gray" : "" }}
                    disabled={pokemonCounter === 0}
                    onClick={() => setPokemonCounter(pokemonCounter - 1)}
                  >
                    <i className="fa-solid fa-circle-arrow-left"></i>
                  </button>
                  <p>
                    {pokemonCounter + 1}/{pokemonText?.length}
                  </p>
                  <button
                    style={{
                      background:
                        pokemonCounter + 1 === pokemonText?.length
                          ? "gray"
                          : "",
                    }}
                    disabled={pokemonCounter + 1 === pokemonText?.length}
                    onClick={() => setPokemonCounter(pokemonCounter + 1)}
                  >
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </button>
                </div>
              ) : (
                ""
              )}

              <p>
                {pokemonText.length
                  ? pokemonText[pokemonCounter]
                  : "No informations available"}
              </p>
            </div>
        </>
    )
}

export default CardText