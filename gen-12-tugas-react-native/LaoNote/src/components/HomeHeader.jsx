import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { SearchStatus1 } from 'iconsax-react-native'
import { Notepad2 } from 'iconsax-react-native'

export default function HomeHeader() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Notepad2 size="32" color="black" variant="Outline" />
          <Text style={styles.title}>Lao Note</Text>
        </View>
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
    // paddingVertical: 20
    marginTop: 20
    // marginBottom: 25
    // backgroundColor: 'red'
  },
  title: {
    fontSize: 25
  },
  logo: {
    flex: 1,
    flexDirection: 'row'
  }
})
