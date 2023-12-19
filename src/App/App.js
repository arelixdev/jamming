import React, {useState} from "react";
import "./App.css";

const TrackElement = [
  {name: "Song 1", artist: "Artist 1", album: "Album 1", id: 1},
  {name: "Song 2", artist: "Artist 2", album: "Album 2", id: 2},
  {name: "Song 3", artist: "Artist 3", album: "Album 3", id: 3}
];

const App = () => {
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [trackList, setTrackList] = useState(TrackElement);

  return (
  <div>
    <h1>Ja<span>mmm</span>ing</h1>
    <div className="App">

    </div>
  </div>
  );
}

export default App;
