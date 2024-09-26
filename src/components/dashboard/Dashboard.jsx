import Card from "../card/Card";
import ColorSwitch from "../colorSwitch/ColorSwitch";
import Extra from "../extra/Extra";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <>
        <Header />
        <ColorSwitch />
        <Search />
        <Card />
        <Extra />
        <MusicPlayer />
        </>
    );
};

export default Dashboard;
