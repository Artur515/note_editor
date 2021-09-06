import React, {useContext} from 'react';
import {Card} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const FoundNotes = observer(() => {
    const {noteStore} = useContext(Context)


    const handleFoundedNotes = (e) => {
        noteStore.setId(e)
    }


    return (
        <Card.Body style={{minHeight: 485}}>
            Found notes :
            {noteStore.foundNotes.length === 0 ? <div>Not found</div> : noteStore.foundNotes.map((note) => {
                return <Card key={note.id} className='mt-2 pt-2 cursor' onClick={() => handleFoundedNotes(note)}>
                    <Card.Title>{note.title}</Card.Title>
                </Card>
            })}
        </Card.Body>
    );
});

export default FoundNotes;