import React, {useState, useCallback} from "react";
import "./App.css";

import Playlist from "../Playlist/Playlist";
import SearchResult from "../SearchResult/SearchResult";

const TrackElement = [
  {name: "Song 1", artist: "Artist 1", album: "Album 1", id: 1},
  {name: "Song 2", artist: "Artist 2", album: "Album 2", id: 2},
  {name: "Song 3", artist: "Artist 3", album: "Album 3", id: 3}
];



const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [trackList, setTrackList] = useState(TrackElement);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = useCallback((track) => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)){
      return;
    }
    setPlaylistTracks((prevTrack) => [...prevTrack, track]);
  }, [playlistTracks]);


  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTrack) => prevTrack.filter((currentTrack) => currentTrack.id !== track.id))
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);  
  }, []);

  const savePlaylist = useCallback(() => {
    const trackURIs = trackList.map(track => track.uri);
  }, []);

  return (
  <div>
    <h1>Ja<span>mmm</span>ing</h1>
    <div className="App">
      <div className="App-playlist">
        <SearchResult searchResults={trackList} onAdd={addTrack} />
        <Playlist 
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
        />
      </div>
    </div>
  </div>
  );
}

export default App;
