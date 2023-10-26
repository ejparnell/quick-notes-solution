const Note = require('../../models/note')

async function createNote(req, res) {
    try {
        const note = await Note.create(req.body)
        res.status(201).json(note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function index(req, res) {
    try {
        const notes = await Note.find({ user: req.params.id})
        res.status(200).json(notes)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function updateNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        note.text = req.body.text
        await note.save()
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

async function showNote(req, res) {
    try {
        const note = await Note.findById(req.params.id)
        res.status(200).json(note)
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}

async function deleteNote(req, res) {
    try {
        const note = await Note.findByIdAndDelete(req.params.id)
        await note.deleteOne()
        res.status(204)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createNote,
    index,
    updateNote,
    showNote,
    deleteNote
}