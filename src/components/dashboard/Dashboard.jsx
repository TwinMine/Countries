import { useRef, useEffect } from "react";
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

    // Der Klick-Handler spielt sofort den Sound ab
    const handleClickSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Setzt den Startpunkt des Sounds zurück
            audioRef.current.play().catch(error => {
               alert("Fehler beim Abspielen des Audios:", error);
            });
        }
    };

    return (
        <>
            {/* Audio-Element für den Klicksound */}
            <audio ref={audioRef} src="src/assets/click-sound.ogg" preload="auto">
                <source src="src/assets/click-sound.ogg" type="audio/ogg" />
                Dein Browser unterstützt das Audio-Element nicht.
            </audio>

            {/* Haupt-DIV, das den Klicksound sofort auslöst */}
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
