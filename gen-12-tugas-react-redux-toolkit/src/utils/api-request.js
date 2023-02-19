import axios from 'axios'

const BASE_URL = 'http://localhost:3000/notes/'
const NOTES_KEY = 'NOTES'

const getAllNotes = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response.data
  } catch (error) {
    // alert(error.message)
    if (error.code === 'ERR_NETWORK') {
      let notes = JSON.parse(localStorage.getItem(NOTES_KEY))
      if (!notes) {
        notes = [
          {
            id: new Date().getTime(),
            title: 'your title note',
            createdAt: new Date().toISOString(),
            body: 'your note',
            archived: false
          }
        ]
        localStorage.setItem(NOTES_KEY, JSON.stringify(notes))
      }
      return notes
    }
  }
}

const getNote = async (id) => {
  try {
    const note = await axios.get(BASE_URL + id)
    return note.data
  } catch (error) {
    // alert(error.message)
    if (error.code === 'ERR_NETWORK') {
      let notes = JSON.parse(localStorage.getItem(NOTES_KEY))
      const note = notes.filter((note) => note.id == id)[0]
      return note
    }
  }
}

const addNote = async (note) => {
  try {
    await axios.post(BASE_URL, note)
  } catch (error) {
    // alert(error.message)
    if (error.code === 'ERR_NETWORK') {
      let notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || []
      localStorage.setItem(NOTES_KEY, JSON.stringify([...notes, { ...note, id: new Date().getTime() }]))
    }
  }
}

const deleteNote = async (id) => {
  try {
    await axios.delete(BASE_URL + id)
  } catch (error) {
    // alert(error.message)
    if (error.code === 'ERR_NETWORK') {
      let notes = JSON.parse(localStorage.getItem(NOTES_KEY))
      const filteredNotes = notes.filter((note) => note.id != id)
      localStorage.setItem(NOTES_KEY, JSON.stringify([...filteredNotes]))
    }
  }
}

const updateNote = async (id, newNote) => {
  try {
    await axios.put(BASE_URL + id, newNote)
  } catch (error) {
    // alert(error.message)
    if (error.code === 'ERR_NETWORK') {
      let notes = JSON.parse(localStorage.getItem(NOTES_KEY))
      const filteredNotes = notes.map((note) => {
        if (note.id == id) {
          return { ...newNote, id: id }
        }
        return note
      })
      localStorage.setItem(NOTES_KEY, JSON.stringify([...filteredNotes]))
    }
  }
}

const getAuthUser = async (credential) => {
  try {
    const user = await axios.post('https://dummyjson.com/auth/login', credential)
    return user.data
  } catch (error) {
    alert('Incorrect username or password')
    return {}
  }
}

export { getAllNotes, getNote, addNote, deleteNote, updateNote, getAuthUser }
