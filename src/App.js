import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="app">
      <div className="app__top">
        <img src="https://vidify.org/images/logo.png" alt="logo" />
      </div>
      <div className="app__videos">
        {reels.map((reel) => (
          <VideoCard
            channel={reel.channel}
            avatarSrc={reel.avatarSrc}
            song={reel.song}
            url={reel.url}
            likes={reel.likes}
            shares={reel.shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
