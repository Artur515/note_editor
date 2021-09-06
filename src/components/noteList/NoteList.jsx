import React, {useContext} from 'react';
import {Card, ListGroup} from "react-bootstrap";
import style from './style.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const NoteList = observer(() => {
    const {noteStore} = useContext(Context)


    const handleEvent = (e) => {
        noteStore.setId(e)
    }


    return (
        <ListGroup variant="flush" className={style.list}>
            {noteStore.notes?.length === 0 ? <div>No notes!!!</div> : noteStore.notes?.map((note) => {
                return <Card onClick={() => handleEvent(note)} className='cursor hover m-2' body key={note.id}>
                    {note.title}</Card>
            })}
        </ListGroup>
    );
});

export default NoteList;