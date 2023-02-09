import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screen/HomeScreen'
import Header from './Header'
import Dummy from '../screen/Dummy'
import { TouchableHighlight } from 'react-native'

const BottomTab = createBottomTabNavigator()

export default function BottomTabNavigator() {
  return (
    <>
      <BottomTab.Navigator>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: (props) => <Header {...props} />,
            headerShadowVisible: false
          }}
        />
        <BottomTab.Screen name="dummy 2" component={Dummy} />
        <BottomTab.Screen name="dummy 3" component={Dummy} />
      </BottomTab.Navigator>
    </>
  )
}
