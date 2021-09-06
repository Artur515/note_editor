import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, FloatingLabel, FormControl, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import {validations} from "../../validation";
import style from "./style.module.css";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";


const Details = observer(() => {
    const {noteStore} = useContext(Context)
    const listNote = JSON.parse(localStorage.getItem('notes'))
    const [notesList, setNotesList] = useState(() => listNote ? listNote : [])

//for update inputs after submit
    const defaultValues = {
        title: "",
        description: ""
    };

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm();


    const onSubmit = ({title, description}) => {
        //take unique id
        const id = Date.now()
        const newNote = {id, title, description}
        setNotesList([...notesList, newNote])
        reset(defaultValues)
        noteStore.setNotes([...notesList, newNote])
        noteStore.setId(null)
    }


    //watching for left side list
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notesList))
        noteStore.setNotes(notesList)
        // eslint-disable-next-line
    }, [notesList])


//add for title & description values
    const handleAddValue = () => {
        if (noteStore._note_id !== null) {
            setValue('title', noteStore._note_id?.title)
            setValue('description', noteStore._note_id?.description)
        } else reset(defaultValues)
    }

    useEffect(() => {
        handleAddValue()
        // eslint-disable-next-line
    }, [noteStore._note_id])


    const handleDeleteTask = (id) => {
        reset(defaultValues)
        setNotesList(notesList.filter((note) => {
            return note.id !== id
        }))
        noteStore.setId(null)
    }

    const handleSaveEditedNote = () => {
        let res = noteStore.notes.filter(note => note.id !== noteStore._note_id.id)
        setNotesList(res)
    }

    return (
        <Card.Body>
            {noteStore._note_id !== null &&
            <div className={style.delete} onClick={() => handleDeleteTask(noteStore._note_id.id)}></div>}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Card.Title className='mt-2'>Title</Card.Title>
                <FormControl placeholder='Title' {...register('title', validations.title)}/>
                {errors?.title?.type === "required" && errors?.title?.type === "required" &&
                <p className={style.errors}>This field is required</p>}
                {errors?.title?.type === "minLength" && (<p className={style.errors}>Title is too short</p>)}
                {errors?.title?.type === "maxLength" && (<p className={style.errors}>Title is too long</p>)}
                <Card className='mt-4'>
                    <FloatingLabel label="Description">
                        <Form.Control
                            {...register('description', validations.description)}
                            as="textarea"
                            style={{height: '300px'}}
                        />
                        {errors?.description?.type === "required" && errors?.description?.type === "required" &&
                        <p className={style.errors}>This field is required</p>}
                        {errors?.description?.type === "minLength" && (
                            <p className={style.errors}>Description is too short</p>)}
                        {errors?.description?.type === "maxLength" && (
                            <p className={style.errors}>Description is too long</p>)}
                    </FloatingLabel>
                </Card>
                {noteStore._note_id !== null ? <Button
                        onClick={handleSaveEditedNote}
                        variant="outline-dark"
                        className='mt-2'
                        type="submit"
                    >
                        Save edited note
                    </Button> :
                    <Button
                        variant="outline-dark"
                        className='mt-2'
                        type="submit">
                        Save note
                    </Button>}
            </Form>
        </Card.Body>
    );
});

export default Details;