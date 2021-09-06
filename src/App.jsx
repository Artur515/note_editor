import React, {useContext, useEffect} from "react";
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Greeting from "./pages/greeting/Greeting";
import Note from "./pages/note/Note";
import {Context} from "./index";


const App = () => {
    const {noteStore} = useContext(Context)

    useEffect(() => {
        noteStore.setNotes(JSON.parse(localStorage.getItem('notes')))
    }, [noteStore])


    return (
        <Switch>
            <Route exact path='/' component={Greeting}/>
            <Route exact path='/note' component={Note}/>
            <Redirect to='/'/>
        </Switch>
    );
}

export default App;
