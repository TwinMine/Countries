import { useContext, useState } from "react";
import PokemonData from "../../context/PokemonData";
import PokemonPicture from "../../context/PokemonPicture";
import SecondDataFetch from "../../context/SecondDataFetch";
import "./search.css";
import PokemonCounter from "../../context/PokemonCounter";
import { firstDataFetch } from "../function/firstDataFetch";

const url = import.meta.env.VITE_URL;

const Search = () => {
    const [searchedPokemon, setSearchedPokemon] = useState("");
    const { pokemonData, setPokemonData } = useContext(PokemonData);
    const { pokemonPicture, setPokemonPicture } = useContext(PokemonPicture);
    const { secondDataFetch, setSecondDataFetch } = useContext(SecondDataFetch);
    const { pokemonCounter, setPokemonCounter } = useContext(PokemonCounter);

    const handleSubmit = (e) => {
        e.preventDefault();
        firstDataFetch(
            searchedPokemon, 
            url, 
            setPokemonCounter, 
            setPokemonData, 
            setPokemonPicture, 
            setSearchedPokemon, 
            setSecondDataFetch
        );
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
                <button disabled={!searchedPokemon} style={{ background: !searchedPokemon ? "gray" : "" }} type="submit">
                    <i className="fa-brands fa-golang"></i>
                </button>
            </form>
        </div>
    );
};

export default Search;