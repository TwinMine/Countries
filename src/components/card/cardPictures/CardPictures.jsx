const CardPictures = ({pokemonData, pokemonPicture, defaultPic}) => {
    return(
        <>
        <div className="pic-div">
              <img
                style={{
                  objectFit:
                    (pokemonPicture && pokemonPicture.front === null) ||
                    pokemonPicture.front === undefined
                      ? "scale-down"
                      : "fill",
                }}
                src={
                  (pokemonPicture && pokemonPicture.front === null) ||
                  pokemonPicture.front === undefined
                    ? defaultPic
                    : pokemonPicture.front
                }
                alt={pokemonData.name}
              />
              <img
                style={{
                  objectFit:
                    (pokemonPicture && pokemonPicture.front === null) ||
                    pokemonPicture.front === undefined
                      ? "scale-down"
                      : "fill",
                }}
                src={
                  (pokemonPicture && pokemonPicture.back === null) ||
                  pokemonPicture.back === undefined
                    ? defaultPic
                    : pokemonPicture.back
                }
                alt={pokemonData.name}
              />
            </div>
        </>
    )
}

export default CardPictures;