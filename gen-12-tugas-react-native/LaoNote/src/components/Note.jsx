import { Lovely } from 'iconsax-react-native'
import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { showFormattedDate } from '../utils/formatDate'
import { toggleFavorite } from '../utils/data'

export default function Note({ id, title, body, createdAt, label, color, favorite }) {
  // console.log(title, favorite)
  const temp = favorite
  const [favState, setFavState] = useState(temp)
  // console.log(title, favState)
  const onPressHandler = () => {
    toggleFavorite(id)
    setFavState(!favState)
  }
  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            borderColor: body !== '' ? '#FF8B65' : color,
            borderStyle: 'solid',
            borderWidth: 1
          }
        ]}
      >
        <TouchableOpacity style={styles.favIcon} onPress={onPressHandler}>
          <Lovely size="20" color={favState ? '#F47373' : 'black'} variant={favState ? 'Bold' : 'TwoTone'} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        {body !== '' && <Text style={[styles.textBody, { marginBottom: 10 }]}>{body}</Text>}
        <View style={styles.footer}>
          <Text style={styles.textBody}>{showFormattedDate(createdAt)}</Text>
          <Text style={styles.textBody}>{label.join('  |  ')}</Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderRadius: 5,
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
