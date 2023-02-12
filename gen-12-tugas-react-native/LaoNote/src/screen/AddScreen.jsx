import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, TextInput } from 'react-native'
import { SaveButton } from '../components/AddHeader'
import { useIsFocused } from '@react-navigation/native'

import useInput from '../hooks/useInput'
// import { addNote, getAllCategories } from '../utils/data'
import { addNoteToStorage, editNoteFromStorage, getCategoriesFromStorage } from '../utils/localStorage'
// import { ediNote } from '../utils/data'
import { Add } from 'iconsax-react-native'

export default function AddScreen({ route, navigation }) {
  let editNote = {
    id: '',
    title: '',
    body: '',
    label: []
  }

  if (route.params) {
    editNote = route.params
  }

  const [input, handleInput] = useInput({
    title: editNote.title || '',
    body: editNote.body || ''
  })

  const [categoriesStorage, setCategoriesStorage] = useState([])

  const [cat, setCat] = useState({})
  const isFocused = useIsFocused()

  useEffect(() => {
    ;(async function () {
      const tempCat = {}
      const temp = await getCategoriesFromStorage()
      setCategoriesStorage(temp)
      temp.forEach((cat) => (tempCat[cat] = editNote.label.includes(cat)))
      setCat({ ...tempCat })
    })()
  }, [isFocused])

  const handleCat = (category) => () => {
    setCat({ ...cat, [category]: !cat[category] })
  }

  const onSaveHandler = async () => {
    const label = Object.keys(cat).filter((key) => cat[key])
    const tempNote = {
      title: input.title,
      body: input.body,
      label
    }
    if (route.params) {
      await editNoteFromStorage(editNote.id, tempNote)
    } else {
      await addNoteToStorage(tempNote)
    }
    navigation.navigate('Home')
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveButton navigation={navigation} onPress={onSaveHandler} />
    })
  }, [navigation, input, cat])

  return (
    <>
      <ScrollView style={styles.container}>
        <TextInput placeholder="write your title here ..." onChangeText={(newText) => handleInput('title', newText)} value={input.title} maxLength={50} />
        <ScrollView style={styles.label} horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoriesStorage.map((category, index) => {
            return (
              <Text key={index} onPress={handleCat(category)} style={{ color: cat[category] ? 'black' : 'grey', fontWeight: cat[category] ? 'bold' : '100' }}>
                {category} {index !== categoriesStorage.length - 1 && ' | '}{' '}
              </Text>
            )
          })}
          <Add size="28" color="black" variant="Outline" onPress={() => navigation.navigate('AddCategory')} />
          {categoriesStorage.length === 0 && <Text>Add category first!</Text>}
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
