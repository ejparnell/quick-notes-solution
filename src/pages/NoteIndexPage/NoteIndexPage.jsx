import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getNotes, createNote } from '../../utilities/notes-api'
import NoteForm from '../../components/NoteForm/NoteForm'

export default function NoteIndexPage({ user }) {
    const [notes, setNotes] = useState([])
    const [isAscending, setIsAscending] = useState(true)

    useEffect(() => {
        async function getUserNotes() {
            const notes = await getNotes(user._id)
            setNotes(notes)
        }
        getUserNotes()
    }, [])

    async function handleSubmit(event) {
        event.preventDefault()
        const note = { text: event.target.text.value, user: user._id }
        const savedNote = await createNote(note)
        setNotes([...notes, savedNote])
    }

    function sortNotes() {
        setIsAscending(preState => !preState)
        const ascendingNotes = [...notes].sort((date1, date2) => {
            return new Date(date2.createdAt).valueOf() - new Date(date1.createdAt).valueOf()
        })
        const descendingNotes = [...notes].sort((date1, date2) => {
            return new Date(date1.createdAt).valueOf() - new Date(date2.createdAt).valueOf()
        })
        isAscending ? setNotes(ascendingNotes) : setNotes(descendingNotes)
    }

    return (
        <div>
            <h1>Your Notes</h1>
            <NoteForm handleSubmit={handleSubmit} formText={'Create'}/>
            <button onClick={sortNotes}>Sort Notes {isAscending ? 'Ascending': 'Descending'}</button>
            {notes.length > 0 ? (
                <>
                {notes.map(note => (
                    <div key={note._id}>
                        <p>Note text: {note.text}</p>
                        <p>Created At: {note.createdAt}</p>
                        <Link to={`/notes/${note._id}`}>See note details</Link>
                    </div>
                ))}
                </>
            ) : (
                <p>No notes yet!</p>
            )}
        </div>
    )
}