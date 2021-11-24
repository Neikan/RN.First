import React, { FC } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { DefaultTheme } from '~/consts/theme'

import { ITodoProps as IProps } from './types'

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderWidth: 1,
    borderColor: DefaultTheme.BRAND_500,
    borderRadius: 3,
    marginBottom: 16
  }
})

export const Todo: FC<IProps> = ({ todo, onOpen, onRemove }) => {
  const handleLongPress = (): void => {
    onRemove(todo.id)
  }

  const handleOpen = (): void => {
    onOpen(todo.id)
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={handleOpen} onLongPress={handleLongPress}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
