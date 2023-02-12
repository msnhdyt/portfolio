import React from 'react'
import { View, Text, TouchableOpacity, Pressable } from 'react-native'

export default function TopTabBar(props) {
  const { state, descriptors, navigation } = props
  // console.log(Object.keys(props.descriptors)[0])
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'whitesmoke',
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20,
        marginBottom: 5
      }}
    >
      {state.routes.map((route, index) => {
        // console.log(route)
        // console.log(Object.keys(descriptors))
        const { options } = descriptors[route.key]
        // console.log(options)
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name

        const isFocused = index === state.index
        const onPress = () => {
          // const event = navigation.emit({
          //   type: 'tabPress',
          //   target: route.key
          // })

          // if (isFocused && !event.defaultPrevented) {
          navigation.jumpTo(route.name)
          // }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <Pressable
            key={route + index}
            // accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            // accessibilityLabel={options.tabBarAccessibilityLabel}
            // testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: isFocused ? 'black' : 'whitesmoke',
              borderRadius: 15
            }}
          >
            <Text
              style={{
                color: isFocused ? 'white' : 'black'
                // backgroundColor: 'white'
              }}
            >
              {label}
            </Text>
          </Pressable>
        )
      })}
    </View>
  )
}
