import React from 'react'
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import Route from './routes'
import * as eva from '@eva-design/eva'
import {ApplicationProvider,IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import { COLORS } from './constants'


const theme = {
  ...DefaultTheme,
  roundness:2,
  colors:{
    ...DefaultTheme.colors,
    primary:COLORS.red2,
    accent:COLORS.red1
  }
}


const App = () => {
    return (
        // later we will wrap this route inside redux provider to access the store all over the application
      <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
        <PaperProvider theme={theme}>
        <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />

          <Route/>
        </PaperProvider>
      
      </ApplicationProvider>
      </>
    )
}

export default App;

const styles = StyleSheet.create({})