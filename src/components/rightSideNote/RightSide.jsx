import React, {useContext, useState} from 'react';
import {Card} from "react-bootstrap";
import Search from "../search/Search";
import NoteDetails from "../noteDetails/NoteDetails";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const RightSide = observer(() => {

    const {noteStore} = useContext(Context)
    const [searchValue, setSearchValue] = useState('')


    const handleSearchNote = (event) => {
        setSearchValue(event.target.value.toLowerCase())
        const {value} = event.target
        let note = noteStore.notes.filter((note) => {
            return note.title.toLowerCase().includes(value.toLowerCase())
        })
        noteStore.setFoundNotes(note)
    }


    return (
        <Card.Body className='d-flex flex-column' style={{minWidth: '65%'}}>
            <Search handleSearchNote={handleSearchNote} searchValue={searchValue}/>
            <NoteDetails searchValue={searchValue} setSearchValue={setSearchValue}/>
        </Card.Body>
    );
});

export default RightSide;