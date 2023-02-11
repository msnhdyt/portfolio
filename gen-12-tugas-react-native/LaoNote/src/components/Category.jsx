import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Folder2 } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'

import { getNotesByCategory } from '../utils/data'
import { getColorMapping } from '../utils/data'

export default function Category({ category }) {
  const navigation = useNavigation()

  const onPressHandler = () => {
    navigation.navigate('NotesByCategory', {
      category
    })
  }

  return (
    <>
      <Pressable style={[styles.container, { backgroundColor: getColorMapping(category)[1] }]} onPress={onPressHandler}>
        <Folder2 size="50" color={getColorMapping(category)[0]} variant="Bulk" />
        <Text style={{ marginTop: 10 }}>{category}</Text>
        <Text style={{ color: 'grey', fontSize: 10 }}>{getNotesByCategory(category).length} Notes</Text>
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
