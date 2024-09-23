import Card from "../card/Card";
import Extra from "../extra/Extra";
import Header from "../header/Header";
import MusicPlayer from "../musicPlayer/MusicPlayer";
import Search from "../search/Search";
import "./dashboard.css";

const Dashboard = () => {
    return (
        <>
        <Header />
        <Search />
        <Card />
        <Extra />
        <MusicPlayer />
        </>
    );
};

export default Dashboard;
