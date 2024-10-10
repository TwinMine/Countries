import { useState } from "react";
import ReactPlayer from "react-player";
import "./musicPlayer.css";

const MusicPlayer = () => {
  const [url, setUrl] = useState("");

  const musicContainer = [
    { title: "English", url: "https://www.youtube.com/watch?v=dCVTpeceIew", language: "en" },
    { title: "German", url: "https://www.youtube.com/watch?v=LUlZ5n0cyak", language: "de" },
    { title: "Japanese", url: "https://www.youtube.com/watch?v=jbHG7fsZVkM", language: "ja" },
  ];

  return (
    <div>
      <div className="player">
        <ReactPlayer url={url} playing controls loop />
      </div>

      {musicContainer.map((track, index) => (
        <button
          key={index}
          disabled={url === track.url}
          style={{
            backgroundColor: url === track.url ? "gray" : "",
            cursor: url === track.url ? "not-allowed" : "pointer",
          }}
          onClick={() => setUrl(track.url)}
        >
          {track.title}
        </button>
      ))}
    </div>
  );
};

export default MusicPlayer;
