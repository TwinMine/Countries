import { useContext, useEffect, useState } from "react";
import "./allPokemons.css";
import { useNavigate } from "react-router-dom";
import SearchedPokemon from "../../../context/SearchedPokemon";
import Cooldown from "../../../context/Cooldown";

const AllPokemons = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const navigate = useNavigate();
    const { setSearchedPokemon } = useContext(SearchedPokemon);
    const {cooldown, setCooldown} = useContext(Cooldown);

    const handlePokemonList = async () => {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
            const data = await response.json();
            
            if (response.ok) {
                setPokemonList(data.results);
            } else {
                alert("Error appeared: " + response.statusText);
            }
        } catch (error) {
            console.error("Error occurred: ", error);
        }
    };

    useEffect(() => {
        handlePokemonList();
    }, []);

    return (
        <div className="pokemon-list">
            {pokemonList.map((item, key) => (
                <button 
                    onClick={() => {
                        setSearchedPokemon(item.name);
                        
                        navigate("/search");
                        
                    }} 
                    key={key}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
};

export default AllPokemons;
