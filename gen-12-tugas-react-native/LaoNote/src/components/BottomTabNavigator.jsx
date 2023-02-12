import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screen/HomeScreen'
import HomeHeader from './HomeHeader'
import Dummy from '../screen/Dummy'
import { TouchableHighlight } from 'react-native'
import { Home2, ArchiveBook, Category2, Setting2 } from 'iconsax-react-native'
import CategoryScreen from '../screen/CategoryScreen'
import { AddCircle } from 'iconsax-react-native'
import ArchiveScreen from '../screen/ArchiveScreen'
import SettingScreen from '../screen/SettingScreen'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <>
      <BottomTab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: 'black',
              borderTopEndRadius: 30,
              borderTopStartRadius: 30,
              height: 70
            },
            tabBarActiveTintColor: 'white',
            tabBarIcon: ({ color, size, focused }) => {
              if (route.name === 'Home') return <Home2 size="28" color={color} variant={focused ? 'Bold' : 'Outline'} />
              else if (route.name === 'Archive') return <ArchiveBook size="28" color={color} variant={focused ? 'Bold' : 'Outline'} />
              else if (route.name === 'Category') return <Category2 size="28" color={color} variant={focused ? 'Bold' : 'Outline'} />
              else if (route.name === 'Setting') return <Setting2 size="28" color={color} variant={focused ? 'Bold' : 'Outline'} />
            }
          }
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <HomeHeader {...props} />,
            headerShadowVisible: false
          }}
        />
        <BottomTab.Screen
          name="Archive"
          component={ArchiveScreen}
          options={({ navigation }) => {
            return {
              headerTitle: (props) => <Text style={{ fontSize: 20 }}>Archives</Text>,
              headerStyle: {
                height: 90
              },
              headerShadowVisible: false,
              headerTitleAlign: 'center'
            }
          }}
        />
        <BottomTab.Screen
          name="Category"
          component={CategoryScreen}
          options={({ navigation }) => {
            return {
              headerTitle: (props) => <Text style={{ fontSize: 20 }}>Categories</Text>,

              headerStyle: {
                height: 90
              },
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerRight: (props) => <AddCircle size="25" color="black" variant="Outline" {...props} style={{ marginRight: 15 }} onPress={() => navigation.navigate('AddCategory')} />
            }
          }}
        />
        <BottomTab.Screen
          name="Setting"
          component={SettingScreen}
          options={({ navigation }) => {
            return {
              headerTitle: 'Settings',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                height: 90
              }
            }
          }}
        />
      </BottomTab.Navigator>
    </>
  )
}
