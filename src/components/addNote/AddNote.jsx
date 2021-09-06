import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const AddNote = observer(() => {
    const {noteStore} = useContext(Context)

    const handleAddNewNote = () => {
        noteStore.setId(null)
    }

    return (
        <Card.Body>
            <Button className='cursor' variant="outline-dark" onClick={handleAddNewNote}>Create new note</Button>
        </Card.Body>
    );
});

export default AddNote;