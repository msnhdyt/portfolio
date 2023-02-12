import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { getFavoriteNotes } from '../utils/data'
import Note from '../components/Note'
import { useIsFocused } from '@react-navigation/native'

export default function FavoriteNotesScreen() {
  const [notes, setNotes] = useState(getFavoriteNotes())
  const isFocused = useIsFocused()

  useEffect(() => {
    setNotes(getFavoriteNotes())
  }, [isFocused])

  const updateListNotes = () => {
    setNotes(getFavoriteNotes())
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
    paddingBottom: 400,
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  title: {
    marginVertical: 15
  }
})
