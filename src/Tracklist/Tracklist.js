import React from "react";
import Track from "../Track/Track";

const Tracklist = (props) => {

    if(!props.tracks) return null;

    return(
        <div className="TrackList">
            {props.tracks.map(track => {
                return <Track 
                track={track}
                key={track.id}
                onAdd={props.onAdd}
                onRemove={props.onRemove}
                isRemoval={props.isRemoval}
                />
            })}
        </div>
    );
};

export default Tracklist;