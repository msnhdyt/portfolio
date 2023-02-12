import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { getArchiveNotes } from '../utils/data'
import Note from '../components/Note'
import { useIsFocused } from '@react-navigation/native'

export default function ArchiveScreen() {
  const [notes, setNotes] = useState(getArchiveNotes())
  const isFocused = useIsFocused()

  useEffect(() => {
    updateListNotes()
  }, [isFocused])

  const updateListNotes = () => {
    setNotes(getArchiveNotes())
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Archive Notes</Text>
        {notes.map((note, index) => {
          // console.log(note.title, note.favorite)
          return <Note key={note.id} {...note} body="" updateListNotes={updateListNotes} />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 30,
    backgroundColor: 'white',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1
  },
  title: {
    marginVertical: 15
  }
})
