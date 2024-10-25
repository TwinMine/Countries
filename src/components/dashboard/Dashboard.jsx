import { useRef } from "react";
import Card from "../card/Card";
import ColorSwitch from "../colorSwitch/ColorSwitch";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";

const Dashboard = () => {
    const audioRef = useRef(null);

    const handleClickSound = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => {
                alert("Audio konnte nicht abgespielt werden:", error);
            });
        }
    };

    return (
        <>
            <audio ref={audioRef} src="src/assets/click-sound.ogg" preload="auto">
                <source src="src/assets/click-sound.ogg" type="audio/ogg" />
                Dein Browser unterstützt das Audio-Element nicht.
            </audio>

            <div onClick={handleClickSound}>
                <Header />
                <Search />
                <Card />
                <Extra />
                <ColorSwitch />
                <MusicPlayer />
                <Footer />
            </div>
        </>
    );
};

export default Dashboard;
