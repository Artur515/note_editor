import {makeAutoObservable} from "mobx";

export default class NoteStore {
    constructor() {
        this._notes = null
        this._note_id = null
        this._foundNode = []
        makeAutoObservable(this)
    }

    setNotes(notes) {
        this._notes = notes
    }

    setId(note) {
        this._note_id = note
    }

    setFoundNotes(notes) {
        this._foundNode = notes
    }


//computed func
    get notes() {
        return this._notes
    }

    get date() {
        return this._note_id
    }

    get foundNotes() {
        return this._foundNode
    }

}