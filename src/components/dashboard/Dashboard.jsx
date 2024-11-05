import ColorSwitch from "../colorSwitch/ColorSwitch";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import "./dashboard.css";
import useSound from 'use-sound';
import clickSound from "../../assets/click-sound.mp3"
import { useState } from "react";
import CardComponents from "./CardComponents/CardComponents";
import {NavLink, Outlet} from "react-router-dom"

const Dashboard = () => {
    const [clickSource, setClickeSource] = useState(clickSound)
    const [play] = useSound(clickSource);
    const changeClickSound = () => {
        if(clickSource){
            setClickeSource(null)
        }
        else{
            setClickeSource(clickSound)
        }
    }

    return (
        <div onClick={play}>
            <Header />
            <NavLink to="/search">Search for Pokemon</NavLink>
            <NavLink to="/pokemon-list">All Pokemons</NavLink>
            <Outlet />
            <ColorSwitch />
            <MusicPlayer />
            <Footer />
            
            <button onClick={() => changeClickSound()}>{clickSource ? "Sound on" : "Sound off"}</button>
        </div>
    );
};

export default Dashboard;
