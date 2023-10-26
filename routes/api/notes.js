const express = require('express')
const router = express.Router()
const notesCtrl = require('../../controllers/api/notes')

router.post('/', notesCtrl.createNote)
router.get('/:id', notesCtrl.index)
router.get('/show/:id', notesCtrl.showNote)
router.patch('/:id', notesCtrl.updateNote)
router.delete('/:id', notesCtrl.deleteNote)

module.exports = router