import sendRequest from './send-request'
const BASE_URL = '/api/notes'

export async function createNote(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData)
}

export async function getNotes(userId) {
    return sendRequest(`${BASE_URL}/${userId}`)
}

export async function showNote(noteId) {
    return sendRequest(`${BASE_URL}/show/${noteId}`)
}

export async function updateNote(noteData, noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'PATCH', noteData)
}

export async function deleteNote(noteId) {
    return sendRequest(`${BASE_URL}/${noteId}`, 'DELETE')
}