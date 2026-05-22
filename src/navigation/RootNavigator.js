import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppNavigator } from './AppNavigator'

const RootNavigator = () => {
  return (
    <NavigationContainer>
        <StatusBar/>

        <AppNavigator />
    </NavigationContainer>
  )
}

export default RootNavigator