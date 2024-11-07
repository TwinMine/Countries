import { useContext, useEffect, useState } from "react";
import "./search.css";
import PokemonData from "../../../../context/PokemonData";
import PokemonPicture from "../../../../context/PokemonPicture";
import SecondDataFetch from "../../../../context/SecondDataFetch";
import PokemonCounter from "../../../../context/PokemonCounter";
import LastPokemon from "../../../../context/LastPokemon";
import SearchedPokemon from "../../../../context/SearchedPokemon";
import { firstDataFetch } from "../../../function/firstDataFetch";
import Cooldown from "../../../../context/Cooldown";

const url = import.meta.env.VITE_URL;

const Search = () => {
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
    const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);
    const { lastPokemon, setLastPokemon } = useContext(LastPokemon);
    const { searchedPokemon, setSearchedPokemon } = useContext(SearchedPokemon);
    const { cooldown, setCooldown } = useContext(Cooldown);

    const fetchPokemonData = async () => {
        if (searchedPokemon && !cooldown) {
            setCooldown(true);
            await firstDataFetch(
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
            );
            setSearchedPokemon(""); 
            setTimeout(() => setCooldown(false), 5000);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchPokemonData(); 
    };


    return (
        <div className="search-container">
            <form className="search-div" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name or number"
                    value={searchedPokemon}
                    onChange={(e) => setSearchedPokemon(e.target.value)}
                    required
                />
                <button 
                    disabled={!searchedPokemon || cooldown} 
                    style={{ background: !searchedPokemon || cooldown ? "gray" : "" }} 
                    type="submit"
                >
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
