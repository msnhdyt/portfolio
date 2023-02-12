import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

// import { getArchiveNotes } from '../utils/data'
import { getArchiveNotesFromStorage } from '../utils/localStorage'
import Note from '../components/Note'
import { useIsFocused } from '@react-navigation/native'
import EmptyList from '../components/EmptyList'

export default function ArchiveScreen() {
  const [notes, setNotes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    updateListNotes()
  }, [isFocused])

  const updateListNotes = async () => {
    const temp = await getArchiveNotesFromStorage()
    setNotes(temp)
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Archive Notes</Text>
        {notes.map((note, index) => {
          // console.log(note.title, note.favorite)
          return <Note key={note.id} {...note} body="" updateListNotes={updateListNotes} />
        })}
        <EmptyList empty={notes.length === 0} />
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
