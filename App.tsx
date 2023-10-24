import { View } from 'react-native'
import React from 'react'
import Navigation from './src/components/navigation/Navigation'
import { DataProvider } from './src/components/context/DataContext'

const App = () => {
  return (
    <View style={{flex: 1}}>
      <DataProvider>
      <Navigation />
    </DataProvider>
    </View>
  )
}

export default App