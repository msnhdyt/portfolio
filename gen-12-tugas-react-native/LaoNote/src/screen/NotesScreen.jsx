import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import Note from '../components/Note'
import EmptyList from '../components/EmptyList'
import { getUnarchiveNotesFromStorage } from '../utils/localStorage'

export default function NotesScreen() {
  const [notes, setNotes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    updateListNotes()
  }, [isFocused])

  const updateListNotes = async () => {
    try {
      const tempNotes = await getUnarchiveNotesFromStorage()
      setNotes(tempNotes.reverse())
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>List Notes</Text>
        {notes.map((note, index) => {
          return <Note key={note.id} {...note} body={index !== 0 ? '' : note.body} updateListNotes={updateListNotes} />
        })}
        <EmptyList empty={notes.length === 0} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginBottom: 300,
    backgroundColor: 'white',
    paddingHorizontal: 15
    // paddingBottom: 400
  },
  title: {
    marginVertical: 15
  }
})
