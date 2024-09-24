import { useState } from 'react'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import PokemonData from './context/PokemonData'
import PokemonPicture from './context/PokemonPicture'
import SecondDataFetch from './context/SecondDataFetch'
import PokemonCounter from './context/PokemonCounter'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [pokemonPicture, setPokemonPicture] = useState({front: "", back: ""})
  const [secondDataFetch, setSecondDataFetch] = useState([])
  const [pokemonCounter, setPokemonCounter] = useState(0)
  return (
    <>
    <PokemonCounter.Provider value={{pokemonCounter, setPokemonCounter}}>
    <SecondDataFetch.Provider value={{secondDataFetch, setSecondDataFetch}}>
    <PokemonPicture.Provider value={{pokemonPicture, setPokemonPicture}}>
    <PokemonData.Provider value={{pokemonData, setPokemonData}}>
    <Dashboard />
    </PokemonData.Provider>
    </PokemonPicture.Provider>
    </SecondDataFetch.Provider>
    </PokemonCounter.Provider>
    </>
  )
}

export default App