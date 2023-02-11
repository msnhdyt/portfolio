import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { getNotesByCategory } from '../utils/data'
import Note from '../components/Note'

export default function NotesByCategoryScreen({ route }) {
  const navigation = useNavigation()
  const { category } = route.params
  const [notes, setNotes] = useState(getNotesByCategory(category))

  useEffect(() => {
    navigation.setOptions({
      title: category + ' Notes'
    })
  }, [])
  return (
    <>
      <ScrollView style={styles.container}>
        {/* <Text style={styles.title}>List Notes</Text> */}
        {notes.map((note, index) => {
          // console.log(note.title, note.favorite)
          return <Note key={note.id} {...note} body="" />
        })}
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20,
    marginBottom: 30
  },
  title: {
    marginVertical: 15
  }
})
