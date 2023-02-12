import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

import EmptyList from '../components/EmptyList'

export default function HighlightScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Highlight Notes</Text>
        <EmptyList empty={true} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15
  },
  title: {
    marginVertical: 15
  }
})
