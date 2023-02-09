import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CloseCircle, TickCircle } from 'iconsax-react-native'

import HomeScreen from './src/screen/HomeScreen'
import AddScreen from './src/screen/AddScreen'
import Header from './src/components/HomeHeader'
import BottomTabNavigator from './src/components/BottomTabNavigator'
import AddHeader from './src/components/AddHeader'
import { CloseButton, SaveButton } from './src/components/AddHeader'
import AddCategoryScreen from './src/screen/AddCategoryScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={({ navigation }) => {
            return {
              title: 'Edit Note',
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerLeft: (props) => <CloseButton {...props} navigation={navigation} />,
              headerRight: (props) => <SaveButton {...props} navigation={navigation} />
              // header: (props) => <AddHeader {...props} />,
            }
          }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategoryScreen}
          options={({ navigation }) => {
            return {
              title: 'Add Category',
              headerShadowVisible: false,
              headerTitleAlign: 'center',
              headerLeft: (props) => <CloseCircle size="28" color="black" variant="Outline" onPress={() => navigation.navigate('Category')} />,
              headerRight: (props) => <TickCircle size="28" color="black" variant="Outline" />
              // header: (props) => <AddHeader {...props} />,
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
