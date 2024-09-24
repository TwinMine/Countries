import { useContext, useState } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import SecondDataFetch from "../../context/SecondDataFetch";
import "./search.css"
import PokemonCounter from "../../context/PokemonCounter";

const url = import.meta.env.VITE_URL;

const Search = () => {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const {pokemonData, setPokemonData} = useContext(PokemonData);
    const {pokemonPicture, setPokemonPicture} = useContext(PokemonPicture)
    const {secondDataFetch, setSecondDataFetch} = useContext(SecondDataFetch)
    const {pokemonCounter, setPokemonCounter} = useContext(PokemonCounter)
    
    async function firstDataFetch(e) {
        e.preventDefault();

        if(!searchedPokemon){
            return alert("Type in your favorite pokemon")
        }
        try {
            const response = await fetch(`${url}/${searchedPokemon.toLowerCase()}`, { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const newData = await response.json();

            if (response.ok) {
                setPokemonCounter(0)
                setPokemonData(newData); 
                setPokemonPicture({front: newData.sprites?.front_default, back: newData.sprites.back_default})
                await formData(newData.species.url)

            } else {
                console.log(newData.response);
                alert("Pokemon not found!")
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Pokemon not found!")
        }
        setSearchedPokemon("")
    }

    async function formData(formUrl) {
        console.log(formUrl);
        
        try {
            const response = await fetch(`${formUrl}`, { 
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const newData = await response.json();
            
            if (response.ok) {
                console.log(newData);
                setSecondDataFetch(newData)
            } else {
                console.log(newData.response);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }


    return (
        <div className="search-div">
            <form onSubmit={firstDataFetch}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name or number"
                    value={searchedPokemon}
                    onChange={(e) => setSearchedPokemon(e.target.value)}
                    required
                />
                <button type="submit"><i className="fa-brands fa-golang"></i></button>
            </form>
        </div>
    );
};

export default Search;
