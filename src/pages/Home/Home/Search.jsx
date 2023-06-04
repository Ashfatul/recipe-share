import React, { useState } from "react";
import { Button, InputGroup, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useState("");
    const handleQuery = (e) => {
        setQuery(e.target.value)
    }
    return(
        <div className="search-container text-center">
            <h4 className="text-bg-info px-5 py-2 rounded search text-uppercase">Search For Recipe</h4>
            
            <InputGroup className="mb-3 search-input mx-auto">
                    <Form.Control
                        placeholder="Search Recipes ..." value={query} onChange={handleQuery} className="p-3"
                        />
                    <NavLink  to={`/search/${query}`} className="btn btn-secondary d-flex align-items-center">
                        Search Recipe
                    </NavLink>
            </InputGroup>
        </div>
    )
};

export default Search;