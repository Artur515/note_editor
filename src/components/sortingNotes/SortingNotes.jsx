import React, {useContext, useState} from 'react';
import {Card} from "react-bootstrap";
import './style.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const SortingNotes = observer(() => {
    const {noteStore} = useContext(Context)
    const [arrowTitle, setArrowTitle] = useState('')
    const [arrowDate, setArrowDate] = useState('')

//clone array for actions
    const notes = noteStore.notes

    const handleSortingTitle = (event) => {
        setArrowTitle(event.target.classList.value)
        if (event.target.classList.value === 'up cursor') {
            noteStore.setNotes([...notes].sort((a, b) => a.title.localeCompare(b.title)))
        } else if (event.target.classList.value === 'down cursor') {
            noteStore.setNotes([...notes].sort((a, b) => b.title.localeCompare(a.title)))
        }
    }


    const handleSortingDate = (event) => {
        setArrowDate(event.target.classList.value)
        if (event.target.classList.value === 'up cursor') {
            noteStore.setNotes([...notes].sort((a, b) => a.id - b.id))
        } else if (event.target.classList.value === 'down cursor') {
            noteStore.setNotes([...notes].sort((a, b) => b.id - a.id))
        }
    }


    return (
        <Card.Body className='d-flex justify-content-around' style={{minHeight: '120px'}}>
            <Card.Title>Title
                {arrowTitle === '' && <>
                    <div onClick={handleSortingTitle} className="up cursor"></div>
                    <div onClick={handleSortingTitle} className="down cursor"></div>
                </>}
                {arrowTitle === 'up cursor' && <div onClick={handleSortingTitle} className="down cursor"></div>}
                {arrowTitle === 'down cursor' && <div onClick={handleSortingTitle} className="up cursor"></div>}

            </Card.Title>
            <Card.Title>Date
                {arrowDate === '' && <>
                    <div onClick={handleSortingDate} className="up cursor"></div>
                    <div onClick={handleSortingDate} className="down cursor"></div>
                </>}

                {arrowDate === 'up cursor' && <div onClick={handleSortingDate} className="down cursor"></div>}
                {arrowDate === 'down cursor' && <div onClick={handleSortingDate} className="up cursor"></div>}
            </Card.Title>
        </Card.Body>
    );

});

export default SortingNotes;