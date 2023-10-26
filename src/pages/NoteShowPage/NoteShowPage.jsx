import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { showNote, updateNote, deleteNote } from '../../utilities/notes-api'
import NoteForm from '../../components/NoteForm/NoteForm'

export default function NoteShowPage({ user }) {
    const [note, setNote] = useState({})
    const { noteId } = useParams()

    useEffect(() => {
        async function getNote() {
            const note = await showNote(noteId)
            setNote(note)
        }
        getNote()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const note = { text: event.target.text.value }
        const savedNote = await updateNote(note, noteId)
        setNote(savedNote)
    }

    async function handleDelete() {
        await deleteNote(noteId)
    }

    return (
        <div>
            <h1>Note Show Page</h1>
            { note && <p>Note text: {note.text}</p> }
            <NoteForm handleSubmit={handleSubmit} formText={'Edit'}/>
            <button onClick={handleDelete}>Delete Note</button>
        </div>
    )
}