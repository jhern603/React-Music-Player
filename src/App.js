import userEvent from "@testing-library/user-event";
import React, { useState } from "react";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import data from "./data";
function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setisPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setisPlaying={setisPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
