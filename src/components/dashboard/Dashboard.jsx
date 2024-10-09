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
      <Search />
      <Card />
      <Extra />
      <ColorSwitch />
      <MusicPlayer />
      <div>
        <p>
          Data dynamically fetched from{" "}
          <a href="https://pokeapi.co" rel="noreferrer" target="_blank">
            PokeAPI
          </a>
          , accessed on {new Date().toDateString()}.
        </p>
      </div>
    </>
  );
};

export default Dashboard;
