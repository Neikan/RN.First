import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from 'consts/theme'

import { ITodoScreenProps as IProps } from './types'

const styles = StyleSheet.create({
  screen: {},
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
})

export const TodoScreen: FC<IProps> = ({ onGoBack, todo }) => {
  return (
    <View style={styles.screen}>
      <Text>{todo.title}</Text>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Назад' onPress={onGoBack} color={DefaultTheme.BRAND_500} />
        </View>
        <View style={styles.button}>
          <Button title='Удалить' onPress={() => null} color={DefaultTheme.DANGER_500} />
        </View>
      </View>
    </View>
  )
}
