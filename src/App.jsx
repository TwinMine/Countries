import { useState } from 'react'
import './App.css'
import Dashboard from './components/main/Dashboard'
import PokemonData from './context/PokemonData'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  return (
    <>
    <PokemonData.Provider value={{pokemonData, setPokemonData}}>
    <Dashboard />
    </PokemonData.Provider>
    </>
  )
}

export default App
