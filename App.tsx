import React, { ReactElement, useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Header } from '@/components/Header'
import { MainScreen } from '@/screens/MainScreen'
import { TodoScreen } from '@/screens/TodoScreen'

import { Nullable } from '@/types'
import { ITodo } from '@/components/Todo/types'
import { DefaultTheme, Spacing } from '@/consts/theme'

export default function App (): ReactElement {
  const [todoId, setTodoId] = useState<Nullable<string>>(null)
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTodo = (title: string): void => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const openTodo = (todoId: string): void => {
    setTodoId(todoId)
  }

  const removeTodo = (todoId: string): void => {
    const todoTitle: string = todos.find(todo => todo.id === todoId)?.title ?? ''

    todoTitle && Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить ${todoTitle}?`,
      [
        {
          text: 'Подтвердить',
          onPress: () => {
            setTodoId(null)
            setTodos((prev) => prev.filter((todo) => todo.id !== todoId))
          }
        },
        {
          text: 'Отмена',
          style: 'cancel',
        }
      ],
      { cancelable: true }
    )
  }

  const editTodo = (id: string, title: string): void => {
    setTodos(prev => prev.map((todo) => {
        if (todo.id === id) {
          todo.title = title
        }

        return todo
      })
    )
  }

  const goBack = (): void => setTodoId(null)

  let content = <MainScreen onAddTodo={addTodo} onOpenTodo={openTodo} onRemoveTodo={removeTodo} todos={todos} />

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId)

    if (selectedTodo) {
      content = <TodoScreen onGoBack={goBack} onRemoveTodo={removeTodo} todo={selectedTodo} onEditTodo={editTodo} />
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
    paddingHorizontal: Spacing.PADDING_X,
    paddingVertical: Spacing.PADDING_Y
  },
  buttons: {
    color: DefaultTheme.BRAND_500
  }
})
