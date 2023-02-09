import React, { useEffect, useState } from 'react'
import { ScrollView, Text, StyleSheet, View, Button, TouchableOpacity, TouchableHighlight } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Add } from 'iconsax-react-native'
import { Animated } from 'react-native'

import NotesScreen from './NotesScreen'
import HighlightsScreen from './HighlightsScreen'
import FavoriteNotesScreen from './FavoriteNotesScreen'
import Dummy from './Dummy'
import { getAllNotes } from '../utils/data'

const Tab = createMaterialTopTabNavigator()

// function MyTabBar({ state, descriptors, navigation, position }) {
//   return (
//     <View style={{ flexDirection: 'row' }}>
//       {state.routes.map((route, index) => {
//         const { options } = descriptors[route.key]
//         const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name

//         const isFocused = state.index === index

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//             canPreventDefault: true
//           })

//           if (!isFocused && !event.defaultPrevented) {
//             // The `merge: true` option makes sure that the params inside the tab screen are preserved
//             navigation.navigate({ name: route.name, merge: true })
//           }
//         }

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key
//           })
//         }

//         const inputRange = state.routes.map((_, i) => i)
//         const opacity = position.interpolate({
//           inputRange,
//           outputRange: inputRange.map((i) => (i === index ? 1 : 0))
//         })

//         return (
//           <TouchableOpacity
//             accessibilityRole="button"
//             accessibilityState={isFocused ? { selected: true } : {}}
//             accessibilityLabel={options.tabBarAccessibilityLabel}
//             testID={options.tabBarTestID}
//             onPress={onPress}
//             onLongPress={onLongPress}
//             style={{ flex: 1 }}
//           >
//             <Animated.Text style={{ opacity }}>{label}</Animated.Text>
//           </TouchableOpacity>
//         )
//       })}
//     </View>
//   )
// }

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('notes')

  const isActiveTabNotes = () => {
    return activeTab === 'notes'
  }

  const isActiveTabHighlights = () => {
    return activeTab === 'highlights'
  }

  const isActiveTabFavorites = () => {
    return activeTab === 'favorites'
  }

  const onAddClickHandler = () => {
    navigation.navigate('Add')
  }

  const onNotesPressHandler = () => {
    setActiveTab('notes')
  }

  const onHighlightsPressHandler = () => {
    setActiveTab('highlights')
  }

  const onFavoritesPressHandler = () => {
    setActiveTab('favorites')
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableHighlight style={[styles.tab, isActiveTabNotes() && styles.activeTab]} onPress={onNotesPressHandler}>
            <Text style={{ textAlign: 'center', color: isActiveTabNotes() ? 'white' : 'black' }}>Notes</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.tab, isActiveTabHighlights() && styles.activeTab]} onPress={onHighlightsPressHandler}>
            <Text style={{ textAlign: 'center', color: isActiveTabHighlights() ? 'white' : 'black' }}>Highlights</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.tab, isActiveTabFavorites() && styles.activeTab]} onPress={onFavoritesPressHandler}>
            <Text style={{ textAlign: 'center', color: isActiveTabFavorites() ? 'white' : 'black' }}>Favorites</Text>
          </TouchableHighlight>
        </View>
        {isActiveTabNotes() && <NotesScreen />}
        {isActiveTabHighlights() && <HighlightsScreen />}
        {isActiveTabFavorites() && <FavoriteNotesScreen />}
      </ScrollView>
      {/* <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'whitesmoke', height: 50 },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'blue'
        }}
        style={{
          marginTop: 10
        }}
        // tabBar={(props) => <MyTabBar {...props} />}
      >
        <Tab.Screen name="Notes" component={NotesScreen} options={{}} />
        <Tab.Screen name="Highlights" component={HighlightsScreen} />
        <Tab.Screen name="Favorite Notes" component={FavoriteNotesScreen} />
      </Tab.Navigator> */}
      <TouchableHighlight style={styles.addButton} onPress={onAddClickHandler}>
        <Add size="32" color="white" />
      </TouchableHighlight>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    paddingTop: 30
  },
  tabContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'whitesmoke',
    borderRadius: 13
  },
  tab: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 13
  },
  activeTab: {
    backgroundColor: 'black',
    color: 'white'
  },
  addButton: {
    position: 'absolute',
    padding: 10,
    right: 15,
    bottom: 10,
    backgroundColor: 'black',
    borderRadius: 50
  }
})

// const styles = StyleSheet.create({
//   addButton: {
//     position: 'absolute',
//     padding: 10,
//     right: 15,
//     bottom: 10,
//     backgroundColor: 'black',
//     borderRadius: 50
//   }
// })
