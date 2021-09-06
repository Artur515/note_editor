import React, {useContext, useEffect} from 'react';
import {Card} from "react-bootstrap";
import Details from "../details/Details";
import FoundNotes from "../foundNotes/FoundNotes";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const NoteDetails = observer(({searchValue, setSearchValue}) => {
    const {noteStore} = useContext(Context)

    useEffect(() => {
        setSearchValue('')
        // eslint-disable-next-line
    }, [noteStore._note_id])


    return (
        <Card>
            {searchValue ? <FoundNotes/> : <Details/>}
        </Card>
    );
});

export default NoteDetails;