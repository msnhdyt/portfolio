import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

// import { getFavoriteNotes } from '../utils/data'
import { getFavoriteNotesFromStorage } from '../utils/localStorage'
import Note from '../components/Note'
import { useIsFocused } from '@react-navigation/native'
import EmptyList from '../components/EmptyList'

export default function FavoriteNotesScreen() {
  const [notes, setNotes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    updateListNotes()
  }, [isFocused])

  const updateListNotes = async () => {
    const temp = await getFavoriteNotesFromStorage()
    setNotes(temp)
  }
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>My Favorites</Text>
        {notes.map((note) => {
          return <Note key={note.id} {...note} body="" updateListNotes={updateListNotes} />
        })}
        <EmptyList empty={notes.length === 0} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 400,
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  title: {
    marginVertical: 15
  }
})
