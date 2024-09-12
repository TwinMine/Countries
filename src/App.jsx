import { useState } from 'react'
import './App.css'
import Dashboard from './components/main/Dashboard'
import PokemonData from './context/PokemonData'
import PokemonPicture from './context/PokemonPicture'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonPicture, setPokemonPicture] = useState({front: "", back: ""})
  return (
    <>
    <PokemonPicture.Provider value={{pokemonPicture, setPokemonPicture}}>
    <PokemonData.Provider value={{pokemonData, setPokemonData}}>
    <Dashboard />
    </PokemonData.Provider>
    </PokemonPicture.Provider>
    </>
  )
}

export default App
