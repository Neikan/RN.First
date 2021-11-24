import React, { FC, useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'

import { DefaultTheme } from '@/consts/theme'

import { TodoCard } from '@/components/TodoCard'

import { ITodoScreenProps as IProps } from './types'
import { EditTodo } from '@/components/EditTodo'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
})

export const TodoScreen: FC<IProps> = ({ onEditTodo, onGoBack, onRemoveTodo, todo }) => {
  const [isModal, setIsModal] = useState(false)

  const handleSave = (title: string): void => {
    onEditTodo(todo.id, title)
    setIsModal(false)
  }

  return (
    <View style={styles.screen}>
      <EditTodo isVisible={isModal} todoTitle={todo.title} onCancel={() => setIsModal(false)} onSave={handleSave} />
      <TodoCard todo={todo} onEdit={() => setIsModal(true)} />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title='Назад' onPress={onGoBack} color={DefaultTheme.GRAY_500} />
        </View>
        <View style={styles.button}>
          <Button title='Удалить' onPress={() => onRemoveTodo(todo.id)} color={DefaultTheme.DANGER_500} />
        </View>
      </View>
    </View>
  )
}
