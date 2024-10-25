import Card from "../card/Card";
import ColorSwitch from "../colorSwitch/ColorSwitch";
import Extra from "../extra/Extra";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";
import useSound from 'use-sound';

const Dashboard = () => {
    const [play] = useSound("src/assets/click-sound.ogg");

    const BoopButton = () => {
      return (
          <button 
              onClick={(e) => {
                  e.stopPropagation(); // Verhindert das Auslösen des Dashboard-Klicks
                  play(); // Klicksound abspielen
              }}
          >
              Boop!
          </button>
      );
  };

    const handleDashboardClick = () => {
        play();
    };

    return (
        <div onClick={handleDashboardClick}>
            <Header />
            <Search />
            <Card />
            <Extra />
            <ColorSwitch />
            <MusicPlayer />
            <Footer />
            <BoopButton />
        </div>
    );
};

export default Dashboard;
