import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { getHeaderTitle } from '@react-navigation/elements'
import { CloseCircle, TickCircle } from 'iconsax-react-native'

export default function AddHeader({ navigation, route, options, back }) {
  const title = getHeaderTitle(options, route.name)
  return (
    <>
      <View>
        <Text>{title}</Text>
      </View>
    </>
  )
}

function CloseButton({ navigation }) {
  // console.log(props)
  const onPress = () => {
    // alert('save?')
    navigation.navigate('Home')
  }
  return (
    <>
      <TouchableNativeFeedback onPress={onPress}>
        <CloseCircle size="28" color="black" variant="Outline" />
      </TouchableNativeFeedback>
    </>
  )
}

function SaveButton({ navigation, onPress }) {
  return (
    <>
      <TouchableNativeFeedback onPress={onPress}>
        <TickCircle size="28" color="black" variant="Outline" />
      </TouchableNativeFeedback>
    </>
  )
}

export { CloseButton, SaveButton }
