import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";

const Search = ({handleSearchNote, searchValue}) => {


    return (
        <InputGroup className="mb-3">
            <FormControl value={searchValue} onChange={handleSearchNote} placeholder='Tab to search...'/>
        </InputGroup>
    );
};

export default Search;