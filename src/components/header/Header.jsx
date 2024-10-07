import PokemonComponent from "../pokemonComponents/PokemonComponent";
import "./header.css"

const Header = () => {
    return(
        <>
        <h1 className="modern-title">
            PokePal Codex
        </h1>
        <PokemonComponent />
        </>
    )
}

export default Header;