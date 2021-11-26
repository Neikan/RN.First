import React, { FC, useContext } from 'react'
import { StyleSheet, View } from 'react-native'

import { ScreenContext } from '@/context/screen/screenContext'

import { Spacing } from '@/consts/theme'

import { Header } from '@/components/Header'
import { MainScreen } from '@/screens/MainScreen'
import { TodoScreen } from '@/screens/TodoScreen'

export const MainLayout: FC = () => {
  const { todoId } = useContext(ScreenContext)

  return (
    <View>
      <Header title='Todo App' />

      <View style={styles.screen}>{todoId ? <TodoScreen /> : <MainScreen />}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    height: 700,
    paddingHorizontal: Spacing.PADDING_X,
    paddingVertical: Spacing.PADDING_Y
  }
})
