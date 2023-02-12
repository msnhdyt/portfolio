import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Folder2 } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native'

// import { getNotesByCategory } from '../utils/data'
// import { getColorMapping } from '../utils/data'
import { getColorMappingFromStorage, getNotesByCategoryFromStorage } from '../utils/localStorage'

export default function Category({ category }) {
  const navigation = useNavigation()
  const [color, setColor] = useState([])
  const [notes, setNotes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    ;(async function () {
      const temp = await getColorMappingFromStorage()
      const tempNotes = await getNotesByCategoryFromStorage(category)
      setColor(temp[category])
      setNotes(tempNotes)
    })()
  }, [isFocused])

  const onPressHandler = () => {
    navigation.navigate('NotesByCategory', {
      category
    })
  }

  return (
    <>
      <Pressable style={[styles.container, { backgroundColor: color[1] }]} onPress={onPressHandler}>
        <Folder2 size="50" color={color[0]} variant="Bulk" />
        <Text style={{ marginTop: 10 }}>{category}</Text>
        <Text style={{ color: 'grey', fontSize: 10 }}>{notes.length} Notes</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 20
  }
})
