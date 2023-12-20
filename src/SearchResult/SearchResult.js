import React from "react";

import Tracklist from "../Tracklist/Tracklist";

const SearchResult = (props) => {

    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <Tracklist 
            tracks={props.searchResults}
            onAdd={props.onAdd}
            isRemoval={false}
            />
        </div>
    );
};

export default SearchResult;