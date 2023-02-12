import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import { getNotesByCategory } from '../utils/data'
import { getNotesByCategoryFromStorage } from '../utils/localStorage'
import Note from '../components/Note'
import EmptyList from '../components/EmptyList'

export default function NotesByCategoryScreen({ route }) {
  const navigation = useNavigation()
  const { category } = route.params
  const [notes, setNotes] = useState([])

  useEffect(() => {
    ;(async function () {
      navigation.setOptions({
        title: category + ' Notes'
      })
      const temp = await getNotesByCategoryFromStorage(route.params.category)
      setNotes(temp)
    })()
  }, [])
  return (
    <>
      <ScrollView style={styles.container}>
        {notes.map((note, index) => {
          return <Note key={note.id} {...note} body="" />
        })}
        <EmptyList empty={notes.length === 0} />
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
