import { useState } from "react";
import PokemonComponent from "../pokemonComponents/PokemonComponent";

const Header = () => {
    return(
        <>
        <h1>
            PokePal Codex
        </h1>
        <PokemonComponent />
        </>
    )
}

export default Header;