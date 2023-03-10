import { Lovely } from 'iconsax-react-native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { showFormattedDate } from '../utils/formatDate'
// import { toggleArchive, toggleFavorite, deleteNote, getNoteById } from '../utils/data'
import { toggleArchiveFromStorage, toggleFavoriteFromStorage, deleteNoteFromStorage, getNoteFromStorage } from '../utils/localStorage'
import ModalOnLongPressNote from './ModalOnLongPressNote'

export default function Note({ id, title, body, createdAt, label, color, favorite, archive, updateListNotes }) {
  // console.log('1', title, favorite)
  // const temp = favorite
  // const [favState, setFavState] = useState(temp)
  // console.log('2', title, favState)
  const [modalVisible, setModalVisible] = useState(false)
  const [noteVisible, setNoteVisible] = useState(true)
  const navigation = useNavigation()

  const onFavPressHandler = async () => {
    await toggleFavoriteFromStorage(id)
    // setFavState(!favState)
    if (updateListNotes) updateListNotes()
  }

  const onDeleteHandler = () => {
    deleteNoteFromStorage(id)
    setModalVisible(false)
    setNoteVisible(false)
  }

  const onArchiveHandler = () => {
    toggleArchiveFromStorage(id)
    setModalVisible(false)
    setNoteVisible(false)
  }

  const onLongPressHandler = () => {
    setModalVisible(true)
  }

  const onNotePressHandler = async () => {
    const noteById = await getNoteFromStorage(id)

    navigation.navigate('Add', {
      id,
      title,
      body: noteById.body,
      label
    })
  }

  if (noteVisible)
    return (
      <>
        <Pressable
          style={[
            styles.container,
            {
              backgroundColor: color,
              borderColor: body !== '' ? '#FF8B65' : color,
              borderStyle: 'solid',
              borderWidth: 1
            }
          ]}
          onLongPress={onLongPressHandler}
          onPress={onNotePressHandler}
        >
          <TouchableOpacity style={styles.favIcon} onPress={onFavPressHandler}>
            <Lovely size="20" color={favorite ? '#F47373' : 'black'} variant={favorite ? 'Bold' : 'TwoTone'} />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          {body !== '' && <Text style={[styles.textBody, { marginBottom: 10 }]}>{body}</Text>}
          <View style={styles.footer}>
            <Text style={styles.textBody}>{showFormattedDate(createdAt)}</Text>
            <Text style={styles.textBody}>{label.join('  |  ')}</Text>
          </View>
        </Pressable>
        <ModalOnLongPressNote visible={modalVisible} setVisible={setModalVisible} onDeleteHandler={onDeleteHandler} onArchiveHandler={onArchiveHandler} archive={archive} />
      </>
    )
  else return <></>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderRadius: 10,
    marginBottom: 15,
    // marginHorizontal: 15,
    padding: 10,
    minHeight: 70
  },
  footer: {
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10,
    width: '90%'
  },
  textBody: {
    color: 'grey',
    fontWeight: '100',
    fontSize: 11
  },
  favIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
    elevation: 10
    // backgroundColor: 'red'
  }
})
