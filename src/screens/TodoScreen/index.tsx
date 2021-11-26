import React, { FC, useContext, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import { ScreenContext } from '@/context/screen/screenContext'
import { TodoContext } from '@/context/todo/todoContext'

import { DefaultTheme } from '@/consts/theme'

import { AppButton } from '@/components/AppButton'
import { TodoCard } from '@/components/TodoCard'
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
    width: Dimensions.get('window').width / 3
    // width: Dimensions.get('window').width > 400 ? 150 : 100
  }
})

export const TodoScreen: FC = () => {
  const { todos, removeTodo, updateTodo } = useContext(TodoContext)
  const { todoId, changeScreen } = useContext(ScreenContext)

  const selectedTodo = todos.find((todo) => todo.id === todoId)

  if (selectedTodo) {
    const [isModal, setIsModal] = useState(false)

    const handleSave = (title: string): void => {
      updateTodo(selectedTodo.id, title)
      setIsModal(false)
    }

    return (
      <View style={styles.screen}>
        <EditTodo
          isVisible={isModal}
          todoTitle={selectedTodo.title}
          onCancel={() => setIsModal(false)}
          onSave={handleSave}
        />
        <TodoCard todo={selectedTodo} onEdit={() => setIsModal(true)} />

        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton onPress={() => changeScreen(null)} backgroundColor={DefaultTheme.GRAY_500}>
              <AntDesign name='back' size={24} />
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton onPress={() => removeTodo(selectedTodo.id)} backgroundColor={DefaultTheme.DANGER_500}>
              <FontAwesome name='remove' size={24} />
            </AppButton>
          </View>
        </View>
      </View>
    )
  }

  return null
}
