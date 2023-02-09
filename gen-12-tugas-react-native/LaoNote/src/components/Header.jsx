import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchStatus1 } from 'iconsax-react-native'

export default function Header() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lao Note</Text>
        <SearchStatus1 size="32" color="black" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginRight: 27,
    marginTop: 20
    // marginBottom: 25,
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 25
  }
})
