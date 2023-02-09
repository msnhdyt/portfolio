import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { SaveButton } from '../components/AddHeader'

import useInput from '../hooks/useInput'
import { addNote, getAllCategories } from '../utils/data'

export default function AddScreen({ navigation }) {
  const [input, handleInput] = useInput({
    title: '',
    body: ''
  })

  const [cat, setCat] = useState({})
  useEffect(() => {
    const tempCat = {}
    getAllCategories().forEach((cat) => (tempCat[cat] = false))
    setCat({ ...tempCat })
  }, [])

  const handleCat = (category) => () => {
    setCat({ ...cat, [category]: !cat[category] })
  }

  const onSaveHandler = () => {
    // console.log('dari add screen', input)
    const label = Object.keys(cat).filter((key) => cat[key])
    addNote({
      title: input.title,
      body: input.body,
      label
    })
    navigation.navigate('Home')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton navigation={navigation} onPress={onSaveHandler} />
    })
    // console.log('dari us', input)
  }, [navigation, input, cat])

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput placeholder="write your title here ..." onChangeText={(newText) => handleInput('title', newText)} value={input.title} maxLength={50} />
        {/* <Text>{input.title}</Text> */}
        <ScrollView style={styles.label} horizontal={true} showsHorizontalScrollIndicator={false}>
          {getAllCategories().map((category, index) => {
            return (
              <Text key={index} onPress={handleCat(category)} style={{ color: cat[category] ? 'black' : 'grey' }}>
                {category} {index !== getAllCategories().length - 1 && ' | '}{' '}
              </Text>
            )
          })}
          {/* {console.log(cat)} */}
        </ScrollView>
        <TextInput multiline placeholder="you can write anything here ..." onChangeText={(newText) => handleInput('body', newText)} value={input.body} />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 2,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  label: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 5,
    paddingVertical: 20,
    borderBottomColor: 'whitesmoke',
    borderBottomWidth: 1,
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1
  }
})
