import { ArchiveAdd, ArchiveMinus, TrushSquare } from 'iconsax-react-native'
import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'

export default function ModalOnLongPressNote({ visible, setVisible, onDeleteHandler, onArchiveHandler, archive }) {
  const hideModal = () => {
    setVisible(false)
  }

  return (
    // <View style={styles.centeredView}>
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.')
        setVisible(!visible)
      }}
      style={styles.centeredView}
    >
      <Pressable style={styles.centeredView} onPress={hideModal}>
        <Pressable style={styles.modalView}>
          <Pressable onPress={onArchiveHandler}>{!archive ? <ArchiveAdd size="32" color="grey" variant="Outline" /> : <ArchiveMinus size="32" color="grey" variant="Outline" />}</Pressable>
          <Pressable onPress={onDeleteHandler}>
            <TrushSquare size="32" color="red" variant="Outline" />
          </Pressable>
        </Pressable>
      </Pressable>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
    // backgroundColor: 'red'
  },
  modalView: {
    margin: 15,
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000'
  }
})
