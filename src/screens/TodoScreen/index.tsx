import React, { FC, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { DefaultTheme } from '@/consts/theme'

import { AppButton } from '@/components/AppButton'
import { TodoCard } from '@/components/TodoCard'
import { EditTodo } from '@/components/EditTodo'

import { ITodoScreenProps as IProps } from './types'

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
    width: Dimensions.get('window').width / 3
    // width: Dimensions.get('window').width > 400 ? 150 : 100
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
          <AppButton onPress={onGoBack} backgroundColor={DefaultTheme.GRAY_500}>
            <AntDesign name='back' size={24} />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={() => onRemoveTodo(todo.id)} backgroundColor={DefaultTheme.DANGER_500}>
            <FontAwesome name='remove' size={24} />
          </AppButton>
        </View>
      </View>
    </View>
  )
}
