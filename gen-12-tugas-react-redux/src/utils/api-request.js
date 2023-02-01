import axios from 'axios'

const BASE_URL = 'http://localhost:3000/notes/'

const getAllNotes = async () => {
  try {
    const response = await axios.get(BASE_URL)
    return response.data
  } catch (error) {
    alert(error.message)
  }
}

const getNote = async (id) => {
  try {
    const note = await axios.get(BASE_URL + id)
    return note.data
  } catch (error) {
    alert(error.message)
  }
}

const addNote = async (note) => {
  try {
    await axios.post(BASE_URL, note)
  } catch (error) {
    alert(error.message)
  }
}

const deleteNote = async (id) => {
  try {
    await axios.delete(BASE_URL + id)
  } catch (error) {
    alert(error.message)
  }
}

const updateNote = async (id, note) => {
  try {
    await axios.put(BASE_URL + id, note)
  } catch (error) {
    alert(error.message)
  }
}

const getAuthUser = async (credential) => {
  try {
    const user = await axios.post('https://dummyjson.com/auth/login', credential)
    return user.data
  } catch (error) {
    alert("Incorrect username or password")
    return {}
  }
}

export {
  getAllNotes,
  getNote,
  addNote,
  deleteNote,
  updateNote,
  getAuthUser
}