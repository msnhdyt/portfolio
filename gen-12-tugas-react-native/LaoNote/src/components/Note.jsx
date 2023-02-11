import { Lovely } from 'iconsax-react-native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { showFormattedDate } from '../utils/formatDate'
import { toggleArchive, toggleFavorite, deleteNote, getNoteById } from '../utils/data'
import ModalOnLongPressNote from './ModalOnLongPressNote'

export default function Note({ id, title, body, createdAt, label, color, favorite, archive, updateListNotes }) {
  // console.log(title, favorite)
  const temp = favorite
  const [favState, setFavState] = useState(temp)
  // console.log(title, favState)
  const [modalVisible, setModalVisible] = useState(false)
  const [noteVisible, setNoteVisible] = useState(true)
  const navigation = useNavigation()

  const onFavPressHandler = () => {
    toggleFavorite(id)
    setFavState(!favState)
    if (updateListNotes) updateListNotes()
  }

  const onDeleteHandler = () => {
    deleteNote(id)
    setModalVisible(false)
    setNoteVisible(false)
  }

  const onArchiveHandler = () => {
    toggleArchive(id)
    setModalVisible(false)
    setNoteVisible(false)
  }

  const onLongPressHandler = () => {
    setModalVisible(true)
  }

  const onNotePressHandler = () => {
    navigation.navigate('Add', {
      id,
      title,
      body: getNoteById(id).body,
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
            <Lovely size="20" color={favState ? '#F47373' : 'black'} variant={favState ? 'Bold' : 'TwoTone'} />
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
    padding: 10
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
