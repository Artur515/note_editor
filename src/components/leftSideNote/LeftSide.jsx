import React from 'react';
import {Card} from "react-bootstrap";
import SortingNotes from "../sortingNotes/SortingNotes";
import AddNote from "../addNote/AddNote";
import NoteList from "../noteList/NoteList";

const LeftSide = () => {
    return (
        <Card.Body className='d-flex flex-column justify-space-between' style={{minWidth: '35%'}}>
            <SortingNotes/>
            <AddNote/>
            <NoteList/>
        </Card.Body>
    );
};

export default LeftSide;