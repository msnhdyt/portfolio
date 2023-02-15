import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native'
import { Folder2, TrushSquare } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'
import { useIsFocused } from '@react-navigation/native'

import { deleteCategoryFromStorage, getColorMappingFromStorage, getNotesByCategoryFromStorage } from '../utils/localStorage'

export default function Category({ category, updateCount }) {
  const navigation = useNavigation()
  const [color, setColor] = useState([])
  const [notes, setNotes] = useState([])
  const isFocused = useIsFocused()
  const [modalVisible, setModalVisible] = useState(false)
  const [noteVisible, setNoteVisible] = useState(true)

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

  const onLongPressHandler = () => {
    setModalVisible(true)
  }

  const onDeleteHandler = async () => {
    await deleteCategoryFromStorage(category)
    setModalVisible(false)
    setNoteVisible(false)
    updateCount((prevState) => {
      return prevState - 1
    })
  }

  if (noteVisible)
    return (
      <>
        <Pressable style={[styles.container, { backgroundColor: color[1] }]} onPress={onPressHandler} onLongPress={onLongPressHandler}>
          <Folder2 size="50" color={color[0]} variant="Bulk" />
          <Text style={{ marginTop: 10 }}>{category}</Text>
          <Text style={{ color: 'grey', fontSize: 10 }}>{notes.length} Notes</Text>
        </Pressable>
        <Modal
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false)
          }}
          transparent={true}
        >
          <Pressable style={styles.centeredView} onPress={() => setModalVisible(false)}>
            <Pressable style={styles.modalView}>
              <TrushSquare size="32" color="red" variant="Outline" onPress={onDeleteHandler} />
            </Pressable>
          </Pressable>
        </Modal>
      </>
    )
  return <></>
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
  },
  centeredView: {
    // backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#D0D0D0',
    padding: 20,
    borderRadius: 20
  }
})
