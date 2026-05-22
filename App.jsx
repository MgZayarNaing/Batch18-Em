import { View, Text } from 'react-native'
import React from 'react'
import { AppProviders } from './src/providers/AppProviders'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <AppProviders>
      <RootNavigator />
    </AppProviders>
  )
}

export default App