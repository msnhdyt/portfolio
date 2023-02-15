import AsyncStorage from "@react-native-async-storage/async-storage";

import { getAllColors } from "./data";

const NOTES_KEY = "notes"
const CATEGORIES_KEY = "categories"
const COLOR_MAPPING_KEY = "color_mapping"

const getNotesFromStorage = async () => {
  try {
    // await AsyncStorage.clear()
    const keys = await AsyncStorage.getAllKeys()
    if(keys.includes(NOTES_KEY)){
      const notes = AsyncStorage.getItem(NOTES_KEY) 
      return notes
    }
  } catch (error) {
    alert(error.message)
  }
  return JSON.stringify([])
}

const getNoteFromStorage = async (id) => {
  try {
    const notes = await getNotesFromStorage()
    const note = JSON.parse(notes).filter(note => note.id == id)[0]
    return note
  } catch (error) {
    alert(error.message)
  }
  return {}
}

const getUnarchiveNotesFromStorage = async () => {
  try {
    const notes = await getNotesFromStorage()
    const filteredNotes = JSON.parse(notes).filter(note => !note.archive)
    return filteredNotes
  } catch (error) {
    alert(error.message)
  }
  return []
}

const getArchiveNotesFromStorage = async () => {
  try {
    const notes = await getNotesFromStorage()
    return JSON.parse(notes).filter(note => note.archive)
  } catch (error) {
    alert(error.message)
  }
  return []
}

const getFavoriteNotesFromStorage = async () => {
  try {
    const notes = await getUnarchiveNotesFromStorage()
    return notes.filter(note => note.favorite)
  } catch (error) {
    alert(error.message)
  }
  return []
}

const getCategoriesFromStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    if(keys.includes(CATEGORIES_KEY)){
      const cat = await AsyncStorage.getItem(CATEGORIES_KEY) 
      return JSON.parse(cat)
    }
  } catch (error) {
    alert(error.message)
  }
  return ['Programming', 'Science', 'Design']
}

const getColorMappingFromStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys()
    if(keys.includes(COLOR_MAPPING_KEY)){
      const cat = await AsyncStorage.getItem(COLOR_MAPPING_KEY) 
      return JSON.parse(cat)
    }
  } catch (error) {
    alert(error.message)
  }
  return {
    'Programming': getAllColors()['blue'],
    'Science': getAllColors()['green'],
    'Design': getAllColors()['pink']
  }
}

const getNotesByCategoryFromStorage = async (category) => {
  try {
    const notes = await getNotesFromStorage()
    const filteredNotes = JSON.parse(notes).filter((note) => note.label.includes(category))
    return filteredNotes
  } catch (error) {
    alert(error.message)
  }
}

const addNoteToStorage = async ({title, body, label}) => {
  try {
    const colors = await getColorMappingFromStorage()
    const notes = await getNotesFromStorage()
    const note = {
      id: new Date().getMilliseconds(),
      title,
      body,
      label,
      createdAt: new Date().toISOString(),
      archived: false,
      favorite: false,
      color: label[0] ? colors[label[0]][1] : 'whitesmoke'
    }
    AsyncStorage.setItem(NOTES_KEY, JSON.stringify([...JSON.parse(notes), note]))
  } catch (error) {
    alert(error.message)
  }
}

const editNoteFromStorage = async (id, newNote) => {
  try {
    const notes = await getNotesFromStorage()
    const editNotes = JSON.parse(notes).map(note => {
      if(note.id == id){
        return { ...note, title: newNote.title, body: newNote.body, label: newNote.label}
      }
      return note  
    })
    AsyncStorage.setItem(NOTES_KEY, JSON.stringify(editNotes))
  } catch (error) {
    alert(error.message)
  }
}

const deleteNoteFromStorage = async (id) => {
  try {
    const notes = await getNotesFromStorage()
    const filteredNotes = JSON.parse(notes).filter(note => note.id != id)
    AsyncStorage.setItem(NOTES_KEY, JSON.stringify(filteredNotes))
  } catch (error) {
    alert(error.message)
  }
}

const toggleArchiveFromStorage = async (id) => {
  try {
    const notes = await getNotesFromStorage()
    const tempNotes = JSON.parse(notes).map(note => {
      if(note.id == id){
        return {...note, archive:!note.archive}
      }
      return note
    })
    AsyncStorage.setItem(NOTES_KEY, JSON.stringify(tempNotes))
  } catch (error) {
    alert(error.message)
  }
}

const toggleFavoriteFromStorage = async (id) => {
  try {
    const notes = await getNotesFromStorage()
    const tempNotes = JSON.parse(notes).map(note => {
      if(note.id == id){
        return {...note, favorite:!note.favorite}
      }
      return note
    })
    AsyncStorage.setItem(NOTES_KEY, JSON.stringify(tempNotes))
  } catch (error) {
    alert(error.message)
  }
}

const addCategoryToStorage = async (category, color) => {
  try {
    const cat = await getCategoriesFromStorage()
    const colorMapping = await getColorMappingFromStorage()
    colorMapping[category] = getAllColors()[color]
    AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify([...cat, category]))
    AsyncStorage.setItem(COLOR_MAPPING_KEY, JSON.stringify(colorMapping))
  } catch (error) {
    alert(error.message)
  }
}

const deleteCategoryFromStorage = async (category) => {
  try {
    const cats = await getCategoriesFromStorage()
    const filteredCats = cats.filter((cat) => cat !== category)
    AsyncStorage.setItem(CATEGORIES_KEY, JSON.stringify(filteredCats))
  } catch (error) {
    alert(error.message)
  }
}

export {
  NOTES_KEY,
  getNotesFromStorage,
  getUnarchiveNotesFromStorage,
  getArchiveNotesFromStorage,
  getFavoriteNotesFromStorage,
  getNoteFromStorage,
  getCategoriesFromStorage,
  getColorMappingFromStorage,
  getNotesByCategoryFromStorage,
  addNoteToStorage,
  deleteNoteFromStorage,
  toggleArchiveFromStorage,
  toggleFavoriteFromStorage,
  addCategoryToStorage,
  editNoteFromStorage,
  deleteCategoryFromStorage
}