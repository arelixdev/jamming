import React, {useCallback} from "react";
import "./Playlist.css";
import Tracklist from "../Tracklist/Tracklist";

const Playlist = (props) => {

    const handleNameChange = useCallback ((event) => {
        props.onNameChange(event.target.value);
    }, [props.onNameChange]);

    return(
        <div className="Playlist">
            <input 
            defaultValue={"New Playlist"}
            onChange={handleNameChange}
            />
            <Tracklist 
            tracks={props.playlistTracks}
            onRemove={props.onRemove}
            isRemoval={true}
            />
            <button 
            className="Playlist-save"
            onClick={props.onSave}
            >SAVE TO SPOTIFY</button>
        </div>
    );

}

export default Playlist;