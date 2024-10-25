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

const Dashboard = () => {
    const [play] = useSound(clickSound);

    return (
        <div onClick={play}>
            <Header />
            <Search />
            <Card />
            <Extra />
            <ColorSwitch />
            <MusicPlayer />
            <Footer />
        </div>
    );
};

export default Dashboard;
