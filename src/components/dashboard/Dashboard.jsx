import { useRef, useState } from "react";
import Card from "../card/Card";
import ColorSwitch from "../colorSwitch/ColorSwitch";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";
import clickSound from "../../assets/click-sound.mp3"

const Dashboard = () => {
    const audioRef = useRef(null);
    const [isAudioInitialized, setIsAudioInitialized] = useState(false);

   
    const handleClickSound = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                alert("Fehler beim Abspielen des Audios: " + error.message);
            });
        }
    };

    const initializeAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsAudioInitialized(true))
                .catch(error => alert("Audioinitialisierung fehlgeschlagen: " + error.message));
        }
    };

    return (
        <>
            <audio ref={audioRef} src={clickSound} type="audio/mpeg" preload="auto" />
            
            {!isAudioInitialized && (
                <button onClick={initializeAudio}>Audio aktivieren</button>
            )}

            <div onClick={isAudioInitialized ? handleClickSound : null}>
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
