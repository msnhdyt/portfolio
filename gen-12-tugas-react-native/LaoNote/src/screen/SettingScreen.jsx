import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function SettingScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <Text> Settings</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1
  }
})
