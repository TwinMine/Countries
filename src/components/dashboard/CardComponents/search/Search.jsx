import { useContext, useState } from "react";
import "./search.css";
import PokemonData from "../../../../context/PokemonData";
import PokemonPicture from "../../../../context/PokemonPicture";
import SecondDataFetch from "../../../../context/SecondDataFetch";
import PokemonCounter from "../../../../context/PokemonCounter";
import LastPokemon from "../../../../context/LastPokemon";
import { firstDataFetch } from "../../../function/firstDataFetch";

const url = import.meta.env.VITE_URL;

const Search = () => {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
    const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);
    const {lastPokemon, setLastPokemon} = useContext(LastPokemon)
    const [cooldown, setCooldown] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cooldown) {
            firstDataFetch(
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
            setCooldown(true);
            setTimeout(() => {
                setCooldown(false);
            }, 5000);
        }
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
                    <i className="fa-brands fa-golang"></i>
                </button>
            </form>
        </div>
    );
};

export default Search;
