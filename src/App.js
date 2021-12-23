import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Route from './routes'
import * as eva from '@eva-design/eva'
import {ApplicationProvider,IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'


const App = () => {
    return (
        // later we will wrap this route inside redux provider to access the store all over the application
      <>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider {...eva} theme={eva.light}>
      <Route/>
      </ApplicationProvider>
      </>
    )
}

export default App

const styles = StyleSheet.create({})