import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './src/screen/HomeScreen'
import AddScreen from './src/screen/AddScreen'
import Header from './src/components/Header'
import BottomTabNavigator from './src/components/BottomTabNavigator'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Add" component={AddScreen} options={{ title: 'Edit Note' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
