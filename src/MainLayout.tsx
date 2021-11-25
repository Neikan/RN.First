import React, { FC, useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import { TodoContext } from '@/context/todo/todoContext'

import { Spacing } from '@/consts/theme'

import { Header } from '@/components/Header'
import { MainScreen } from '@/screens/MainScreen'
import { TodoScreen } from '@/screens/TodoScreen'

import { Nullable } from '@/types'

export const MainLayout: FC = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext)

  const [todoId, setTodoId] = useState<Nullable<string>>(null)

  const openTodo = (todoId: string): void => {
    setTodoId(todoId)
  }

  //   todoTitle &&
  //     Alert.alert(
  //       'Удаление элемента',
  //       `Вы уверены, что хотите удалить ${todoTitle}?`,
  //       [
  //         {
  //           text: 'Подтвердить',
  //           onPress: () => {
  //             setTodoId(null)
  //             setTodos((prev) => prev.filter((todo) => todo.id !== todoId))
  //           }
  //         },
  //         {
  //           text: 'Отмена',
  //           style: 'cancel'
  //         }
  //       ],
  //       { cancelable: true }
  //     )
  // }

  const goBack = (): void => setTodoId(null)

  let content = <MainScreen onAddTodo={addTodo} onOpenTodo={openTodo} onRemoveTodo={removeTodo} todos={todos} />

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)

    if (selectedTodo) {
      content = <TodoScreen onGoBack={goBack} onRemoveTodo={removeTodo} todo={selectedTodo} onEditTodo={updateTodo} />
    }
  }

  return (
    <View>
      <Header title='Todo App' />

      <View style={styles.screen}>{content}</View>
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
