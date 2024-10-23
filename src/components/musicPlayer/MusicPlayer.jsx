import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "./musicPlayer.css";

const MusicPlayer = () => {
  
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(0.15); 
  const [savedVolume, setSavedVolume] = useState(0);
  const [muted, setMuted] = useState(false);
const [url, setUrl] = useState("");
const [cooldown, setCooldown] = useState(true)

  const musicContainer = [
    {
      title: "English",
      url: "https://www.youtube.com/watch?v=dCVTpeceIew",
      language: "en",
    },
    {
      title: "German",
      url: "https://www.youtube.com/watch?v=LUlZ5n0cyak",
      language: "de",
    },
    {
      title: "Japanese",
      url: "https://www.youtube.com/watch?v=jbHG7fsZVkM",
      language: "ja",
    },
    {
      title: "Cynthia Fight",
      url: "https://www.youtube.com/watch?v=rXefFHRgyE0&ab_channel=Pokeli",
      language: "cyn",
    },
    {
      title: "Kanto Route 4",
      url: "https://www.youtube.com/watch?v=NmKT3iHsPqI&ab_channel=ReinaldodaSilvaRios",
      language: "kanto",
    },
    {
      title: "Pokemon Center",
      url: "https://www.youtube.com/watch?v=7jxUMjuJ_rw&ab_channel=OfficialVGM%3AArchive",
      language: "ce",
    }
  ];

  useEffect(() => {
    if (muted) {
      setSavedVolume(volume > 0 ? volume : 0.01); 
      setVolume(0); 
    } else if (savedVolume > 0) {
      setVolume(savedVolume);
      setSavedVolume(0);
    }
  }, [muted]);

  useEffect(() => {
    if (volume === 0 && !muted) {
      setMuted(true);
    }
  }, [volume]);

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);

    if (muted && newVolume > 0) {
      setMuted(false); 
    }

    setVolume(newVolume); 
  };

  if(cooldown){
    setTimeout(() => {
      setCooldown(false)
    }, 5000);
  }

  return (
    <div>
      <div className="player">
        <ReactPlayer
          volume={volume} 
          muted={muted} 
          url={url} 
          playing={play} 
          controls 
          loop
        />
      </div>

      <div className="control">
        <button
          style={{
            backgroundColor: url.length <= 0 ? "gray" : "",
            cursor: url.length <= 0 ? "not-allowed" : "pointer",
          }}
          onClick={() => setPlay((prevMode) => !prevMode)}
        >
          {play ? "Stop" : "Play"}
        </button>
      </div>

      

      <div className="volume-container">

        <div className="text-container">
        <button
          className="button-style"
          onClick={() => setMuted((prevMode) => !prevMode)}
        >
          {!muted && volume !== 0 ? (
            <i className="fa-solid fa-volume-high"></i>
          ) : (
            <i className="fa-solid fa-volume-xmark"></i>
          )}
        </button>
      </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
        <p>Volume: {!muted ? (volume * 100).toFixed(0) : 0}%</p>
      </div>

      {musicContainer.map((track, index) => (
        <button
          key={index}
          disabled={url === track.url || cooldown}
          style={{
            backgroundColor: url === track.url || cooldown ? "gray" : "",
            cursor: url === track.url ? "not-allowed" : "pointer",
          }}
          onClick={() => {
            setUrl(track.url);
            setPlay(true);
            setCooldown(true)
          }}
        >
          {track.title}
        </button>
      ))}
    </div>
  );
};

export default MusicPlayer;
