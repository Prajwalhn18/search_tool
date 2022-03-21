import React from 'react';

const Search = (props) => {
    return (
        <div>
            <label htmlFor="search">Search: </label>
            <input
                id="search"
                type="text"
                onChange={props.handleSearch}
            ></input>
            <h1>--------------------------</h1>
        </div>
    );
};

export default Search;
