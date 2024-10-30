async function firstDataFetch(
  searchedPokemon,
  url,
  setPokemonCounter,
  setPokemonData,
  setPokemonPicture,
  setSearchedPokemon,
  setSecondDataFetch,
  lastPokemon,
  setLastPokemon,
  pokemonData
) {
  if (!searchedPokemon) {
    return alert("Type in your favorite Pokémon");
  }

  try {
    const response = await fetch(
      `${url}/${
        typeof searchedPokemon === "string"
          ? searchedPokemon.toLowerCase()
          : searchedPokemon
      }`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const newData = await response.json();

    if (newData?.species?.name === pokemonData?.species?.name) {
      return alert("This is your current pokemon!");
    }

    if (response.ok) {
      setPokemonCounter(0);
      setPokemonData(newData);
      setPokemonPicture({
        front: newData.sprites?.front_default,
        back: newData.sprites?.back_default,
      });
      await formData(newData.species.url, setSecondDataFetch);

      if (
        lastPokemon.includes(newData.species.name) ||
        lastPokemon.includes(newData.name)
      ) {
        return;
      }
      if (lastPokemon.length >= 5) {
        setLastPokemon((prevLastPokemon) => [
          ...prevLastPokemon.slice(1),
          newData.name,
        ]);
      } else {
        setLastPokemon((prevLastPokemon) => [...prevLastPokemon, newData.name]);
      }
    } else {
      console.log(newData.response);
      alert("Pokémon not found!");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Pokémon not found!");
  }
  setSearchedPokemon("");
}

async function formData(formUrl, setSecondDataFetch) {
  try {
    const response = await fetch(formUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newData = await response.json();

    if (response.ok) {
      setSecondDataFetch(newData);
    } else {
      console.log(newData.response);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export { firstDataFetch };
