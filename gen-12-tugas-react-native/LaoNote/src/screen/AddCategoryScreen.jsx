import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TextInput, ScrollView, Pressable } from 'react-native'
import { TickCircle } from 'iconsax-react-native'

import { getAllColors } from '../utils/data'
import { addCategoryToStorage } from '../utils/localStorage'

export default function AddCategoryScreen({ navigation }) {
  const [newCat, setNewCat] = useState('')
  const [colorState, setColorState] = useState('yellow')

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <TickCircle size="28" color="black" variant="Outline" onPress={onSaveHandler} />
    })
  }, [navigation, newCat, colorState])

  const onPressColorHandler = (color) => () => {
    setColorState(color)
  }

  const onSaveHandler = async () => {
    await addCategoryToStorage(newCat, colorState)
    // navigation.navigate('Category')
    navigation.goBack()
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <Text>Choose color theme!</Text>
        <View style={styles.containerColor}>
          {Object.keys(getAllColors()).map((color, index) => {
            return (
              <Pressable key={index} onPress={onPressColorHandler(color)}>
                <View style={{ backgroundColor: getAllColors()[color][0], height: 50, width: 50, borderRadius: 10, borderWidth: color === colorState ? 1 : 0 }} key={index} />
              </Pressable>
            )
          })}
        </View>
        <TextInput placeholder="Category name..." onChangeText={(newText) => setNewCat(newText)} value={newCat} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingTop: 20
  },
  containerColor: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }
})
