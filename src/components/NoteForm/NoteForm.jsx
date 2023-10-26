export default function NoteForm({ handleSubmit, formText }) {
    return (
        <form onSubmit={handleSubmit}>
            <label>Note Text</label>
            <input type="text" name="text" />
            <button type="submit">{formText} Note</button>
        </form>
    )
}