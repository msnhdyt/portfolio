import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

import Note from '../components/Note'
import { getUnarchiveNotes } from '../utils/data'

export default function NotesScreen() {
  const [notes, setNotes] = useState(getUnarchiveNotes())
  const isFocused = useIsFocused()
  useEffect(() => {
    const tempNotes = [...getUnarchiveNotes()]
    setNotes(tempNotes.reverse())
  }, [isFocused])
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>List Notes</Text>
        {notes.map((note, index) => {
          // console.log(note.title, note.favorite)
          return <Note key={note.id} id={note.id} title={note.title} body={index !== 0 ? '' : note.body} createdAt={note.createdAt} label={note.label} color={note.color} favorite={note.favorite} />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 15
    marginBottom: 30
  },
  title: {
    marginVertical: 15
  }
})
