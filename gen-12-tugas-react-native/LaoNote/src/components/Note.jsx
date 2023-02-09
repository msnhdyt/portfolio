import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { showFormattedDate } from '../utils/formatDate'

export default function Note({ title, body, createdAt, label, color }) {
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
    marginBottom: 10
  },
  textBody: {
    color: 'grey',
    fontWeight: '100',
    fontSize: 11
  }
})
