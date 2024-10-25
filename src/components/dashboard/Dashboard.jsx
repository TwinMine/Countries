import { useRef, useState } from "react";
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
    const [isAudioInitialized, setIsAudioInitialized] = useState(false);

    // Der Klick-Handler spielt sofort den Sound ab
    const handleClickSound = () => {
        if (audioRef.current) {
            // Versucht, das Audio zu starten
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                alert("Fehler beim Abspielen des Audios: " + error.message);
            });
        }
    };

    // Initialisiert Audio, nachdem Benutzer die Genehmigung gibt
    const initializeAudio = () => {
        if (audioRef.current) {
            audioRef.current.play()
                .then(() => setIsAudioInitialized(true))
                .catch(error => alert("Audioinitialisierung fehlgeschlagen: " + error.message));
        }
    };

    return (
        <>
            {/* Audio-Element für den Klicksound */}
            <audio ref={audioRef} src="src/assets/click-sound.mp3" type="audio/mpeg" preload="auto" />
            
            {/* Initialisierungsknopf, falls Audio noch nicht aktiviert wurde */}
            {!isAudioInitialized && (
                <button onClick={initializeAudio}>Audio aktivieren</button>
            )}

            {/* Haupt-DIV, das den Klicksound abspielt, nachdem Audio initialisiert wurde */}
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
