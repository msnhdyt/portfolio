import React, { useEffect, useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import Category from '../components/Category'
import { useIsFocused } from '@react-navigation/native'

import { getAllCategories } from '../utils/data'

export default function CategoryScreen() {
  const [categories, setCategories] = useState(() => getAllCategories())
  const isFocused = useIsFocused()

  useEffect(() => {
    setCategories(getAllCategories())
  }, [isFocused])
  return (
    <>
      <ScrollView style={styles.container}>
        <Text>List Categories</Text>
        <View style={styles.categories}>
          {categories.map((category, index) => {
            return <Category key={index} category={category} />
          })}
        </View>
        <Text style={styles.numberCat}>You Have {categories.length} Categories</Text>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopColor: 'whitesmoke',
    borderTopWidth: 1,
    padding: 15
  },
  categories: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  numberCat: {
    marginTop: 30,
    marginBottom: 50,
    textAlign: 'center',
    color: 'grey',
    fontSize: 12
  }
})
