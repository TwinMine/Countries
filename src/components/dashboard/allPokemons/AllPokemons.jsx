import { useEffect, useState } from "react"
import "./allPokemons.css"

const AllPokemons = () => {
    const [pokemonList, setPokemonList] = useState([])

    const handlePokemonList = async() => {
        try{
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",{
                method: "GET",
                headers:{
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            console.log(response);
            
            if(!response.ok){
                return alert("Error appeared: ". response.statusText)
            }else{
                setPokemonList(data.results)
            }
        }catch(error){
            console.error("Error occured: ", error)
        }
    }

    console.log(pokemonList);
    

    useEffect(() => {
        handlePokemonList()
    },[])
    return(
        <>
        <ul>
        {pokemonList && pokemonList.map((item, key) => 
            (<li key={key}>{item.name}</li>)
        )}
        </ul>
        </>
    )
}

export default AllPokemons;