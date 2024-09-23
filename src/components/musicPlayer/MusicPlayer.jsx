import { useState } from "react";
import ReactPlayer from "react-player";
import "./musicPlayer.css"

const MusicPlayer = () => {
  const [url, setUrl] = useState("");

  const musicContainer = [
    { english: "https://www.youtube.com/watch?v=dCVTpeceIew" },
    { german: "https://www.youtube.com/watch?v=LUlZ5n0cyak" }, 
    { japanese: "https://www.youtube.com/watch?v=jbHG7fsZVkM" },
  ];

  return (
    <div>
        <div className="player">
         <ReactPlayer url={url} playing controls loop />   
        </div>
      

      <button onClick={() => setUrl(musicContainer[0].english)}>English</button>
      <button onClick={() => setUrl(musicContainer[1].german)}>German</button>
      <button onClick={() => setUrl(musicContainer[2].japanese)}>Japanese</button>
    </div>
  );
};

export default MusicPlayer;
