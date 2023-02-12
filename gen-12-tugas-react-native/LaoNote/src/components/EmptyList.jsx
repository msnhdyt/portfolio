import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function EmptyList({ empty }) {
  if (!empty) return <></>
  return (
    <View style={styles.container}>
      <Text>Empty</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
