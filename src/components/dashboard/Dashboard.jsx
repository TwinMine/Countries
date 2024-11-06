import ColorSwitch from "../colorSwitch/ColorSwitch";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import "./dashboard.css";
import useSound from 'use-sound';
import clickSound from "../../assets/click-sound.mp3";
import { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [clickSource, setClickSource] = useState(clickSound);
    const [play] = useSound(clickSource);

    const changeClickSound = () => {
        setClickSource(clickSource ? null : clickSound);
    };

    useEffect(() => {
        const handleButtonClick = (event) => {
            if (event.target.tagName === "BUTTON" || event.target.tagName === "A") {
                play();
            }
        };
        document.addEventListener("click", handleButtonClick);
        return () => {
            document.removeEventListener("click", handleButtonClick);
        };
    }, [play]);

    return (
        <div>
            <Header />
            <NavLink to="/search">Search for Pokemon</NavLink>
            <NavLink to="/pokemon-list">All Pokemons</NavLink>
            <Outlet />
            <ColorSwitch />
            <MusicPlayer />
            <Footer />
            
            <button onClick={changeClickSound}>
                {clickSource ? "Sound on" : "Sound off"}
            </button>
        </div>
    );
};

export default Dashboard;
