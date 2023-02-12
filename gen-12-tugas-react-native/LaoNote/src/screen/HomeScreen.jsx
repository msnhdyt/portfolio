import React from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Add } from 'iconsax-react-native'

import NotesScreen from './NotesScreen'
import HighlightsScreen from './HighlightsScreen'
import FavoriteNotesScreen from './FavoriteNotesScreen'
import TopTabBar from '../components/TopTabBar'

const Tab = createMaterialTopTabNavigator()

export default function HomeScreen({ navigation }) {
  const onAddClickHandler = () => {
    navigation.navigate('Add')
  }

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'black'
        }}
        style={{
          padding: 0,
          margin: 0,
          backgroundColor: 'white'
        }}
        tabBar={(props) => {
          return <TopTabBar {...props} />
        }}
      >
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Highlights" component={HighlightsScreen} />
        <Tab.Screen name="Favorite Notes" component={FavoriteNotesScreen} />
      </Tab.Navigator>
      <TouchableHighlight style={styles.addButton} onPress={onAddClickHandler}>
        <Add size="32" color="white" />
      </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    padding: 10,
    right: 15,
    bottom: 10,
    backgroundColor: 'black',
    borderRadius: 50
  }
})
