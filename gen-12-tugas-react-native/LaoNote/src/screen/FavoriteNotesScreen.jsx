import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { getFavoriteNotes } from '../utils/data'
import Note from '../components/Note'

export default function FavoriteNotesScreen() {
  const [notes, setNotes] = useState(getFavoriteNotes())
  const updateListNotes = () => {
    setNotes(getFavoriteNotes)
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>My Favorites</Text>
        {notes.map((note) => {
          return <Note key={note.id} {...note} body="" updateListNotes={updateListNotes} />
        })}
      </View>
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
