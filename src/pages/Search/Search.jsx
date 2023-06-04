import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
    const {query} = useParams();

    return(
        <div className="container py-5">
            <p className="text-center">You have searched for <b>[{query}]</b> . But the search is <b>not yet functional</b></p>
        </div>
    )
};

export default Search;