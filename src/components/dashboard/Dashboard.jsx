import Card from "../card/Card";
import ColorSwitch from "../colorSwitch/ColorSwitch";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";
import useSound from 'use-sound';
import clickSound from "../../assets/click-sound.mp3"
import { useState } from "react";

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
            <Search />
            <Card />
            <Extra />
            <ColorSwitch />
            <MusicPlayer />
            <Footer />
            <button onClick={() => changeClickSound()}>{clickSource ? "Sound on" : "Sound off"}</button>
        </div>
    );
};

export default Dashboard;
