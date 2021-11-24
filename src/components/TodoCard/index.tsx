import React, { FC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { ITodoCardProps as IProps } from './types'

const styles = StyleSheet.create({
  todoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 3,
    marginBottom: 16,
    shadowColor: DefaultTheme.BRAND_500,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: DefaultTheme.LIGHT,
    elevation: 8
  }
})

export const TodoCard: FC<IProps> = ({ onEdit, todo }) => {
  return (
    <View style={styles.todoCard}>
      <Text>{todo.title}</Text>
      <Button color={DefaultTheme.BRAND_500} title='Редактировать' onPress={onEdit} />
    </View>
  )
}
