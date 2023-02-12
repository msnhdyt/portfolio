import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import Note from '../components/Note'
import { getUnarchiveNotes } from '../utils/data'

export default function NotesScreen() {
  const [notes, setNotes] = useState(getUnarchiveNotes())
  const isFocused = useIsFocused()

  useEffect(() => {
    updateListNotes()
  }, [isFocused])

  const updateListNotes = () => {
    const tempNotes = [...getUnarchiveNotes()]
    setNotes(tempNotes.reverse())
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>List Notes</Text>
        {notes.map((note, index) => {
          // console.log(note.title, note.favorite)
          return <Note key={note.id} {...note} body={index !== 0 ? '' : note.body} updateListNotes={updateListNotes} />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 300,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingBottom: 400
  },
  title: {
    marginVertical: 15
  }
})
