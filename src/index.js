import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import NoteStore from "./store/Note";
import 'bootstrap/dist/css/bootstrap.min.css';


export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{noteStore: new NoteStore()}}>
        <BrowserRouter basename='/note_editor'>
            <App/>
        </BrowserRouter>
    </Context.Provider>,
    document.getElementById('root')
);

